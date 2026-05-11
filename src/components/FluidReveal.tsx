import { useEffect, useRef, useState } from "react";

type Props = {
  topSrc: string;
  bottomSrc: string;
  topAlt?: string;
  bottomAlt?: string;
  className?: string;
};

/**
 * Fluid hover reveal: two stacked images rendered inside one SVG. The top
 * image is masked away by an organic blob that follows the cursor with
 * inertia. The blob's edge is deformed via turbulence + displacement so the
 * boundary feels liquid — only the edge moves, the revealed pixels are crisp.
 */
export function FluidReveal({ topSrc, bottomSrc, topAlt, bottomAlt, className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const target = useRef({ x: -9999, y: -9999, r: 0 });
  const current = useRef({ x: -9999, y: -9999, r: 0 });
  const seed = useRef(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.045;
      current.current.y += (target.current.y - current.current.y) * 0.045;
      current.current.r += (target.current.r - current.current.r) * 0.035;

      const c = circleRef.current;
      if (c) {
        c.setAttribute("cx", String(current.current.x));
        c.setAttribute("cy", String(current.current.y));
        c.setAttribute("r", String(Math.max(0, current.current.r)));
      }
      seed.current += 0.25;
      const t = turbRef.current;
      if (t) t.setAttribute("seed", String(Math.floor(seed.current) % 1000));

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect();
    target.current.x = e.clientX - r.left;
    target.current.y = e.clientY - r.top;
    target.current.r = Math.max(r.width, r.height) * 0.38;
  };
  const handleEnter = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect();
    current.current.x = e.clientX - r.left;
    current.current.y = e.clientY - r.top;
    handleMove(e);
  };
  const handleLeave = () => {
    target.current.r = 0;
  };

  const maskId = "fluid-mask";
  const filterId = "fluid-distort";

  return (
    <div
      ref={wrapRef}
      className={className}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ position: "relative", overflow: "hidden", touchAction: "none" }}
    >
      {size.w > 0 && (
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="xMidYMid slice"
          style={{ display: "block" }}
        >
          <defs>
            <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence
                ref={turbRef}
                type="fractalNoise"
                baseFrequency="0.014"
                numOctaves="2"
                seed="1"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="80"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feGaussianBlur stdDeviation="2" />
            </filter>
            <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={size.w} height={size.h}>
              <rect x="0" y="0" width={size.w} height={size.h} fill="white" />
              <g filter={`url(#${filterId})`}>
                <circle ref={circleRef} cx={-9999} cy={-9999} r={0} fill="black" />
              </g>
            </mask>
          </defs>

          {/* bottom (revealed beneath) */}
          <image
            href={bottomSrc}
            x="0"
            y="0"
            width={size.w}
            height={size.h}
            preserveAspectRatio="xMidYMid meet"
          >
            {bottomAlt && <title>{bottomAlt}</title>}
          </image>
          {/* top (masked away by the fluid blob) */}
          <image
            href={topSrc}
            x="0"
            y="0"
            width={size.w}
            height={size.h}
            preserveAspectRatio="xMidYMid meet"
            mask={`url(#${maskId})`}
          >
            {topAlt && <title>{topAlt}</title>}
          </image>
        </svg>
      )}
    </div>
  );
}
