import { useEffect, useRef, useState } from "react";

type Props = {
  topSrc: string;
  bottomSrc: string;
  topAlt?: string;
  bottomAlt?: string;
  className?: string;
};

/**
 * Fluid hover reveal: two stacked images. The top one is masked away by an
 * organic blob that follows the cursor with inertia. The blob's edges are
 * deformed via an SVG turbulence + displacement filter so the boundary feels
 * liquid, while the revealed fill stays crisp.
 */
export function FluidReveal({ topSrc, bottomSrc, topAlt, bottomAlt, className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  // target (where mouse is) and current (where mask is) — lerp to add lag
  const target = useRef({ x: -9999, y: -9999, r: 0 });
  const current = useRef({ x: -9999, y: -9999, r: 0 });
  const seed = useRef(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      // ease toward target — small factor = laggier, more "trailing"
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      current.current.r += (target.current.r - current.current.r) * 0.08;

      const c = circleRef.current;
      if (c) {
        c.setAttribute("cx", String(current.current.x));
        c.setAttribute("cy", String(current.current.y));
        c.setAttribute("r", String(current.current.r));
      }
      // shift turbulence seed so the edge wobbles organically
      seed.current += 0.6;
      const t = turbRef.current;
      if (t) t.setAttribute("seed", String(seed.current % 1000));

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect();
    target.current.x = e.clientX - r.left;
    target.current.y = e.clientY - r.top;
    target.current.r = Math.max(r.width, r.height) * 0.32;
  };
  const handleEnter = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect();
    // seed current to cursor so it doesn't fly across the frame
    current.current.x = e.clientX - r.left;
    current.current.y = e.clientY - r.top;
    handleMove(e);
  };
  const handleLeave = () => {
    target.current.r = 0;
  };

  return (
    <div
      ref={wrapRef}
      className={className}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* bottom (revealed) */}
      <img
        src={bottomSrc}
        alt={bottomAlt ?? ""}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain select-none"
        draggable={false}
      />
      {/* top (masked away on hover) */}
      <img
        src={topSrc}
        alt={topAlt ?? ""}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain select-none"
        draggable={false}
        style={{
          WebkitMaskImage: size.w ? "url(#fluid-mask-svg)" : undefined,
          maskImage: size.w ? "url(#fluid-mask-svg)" : undefined,
          mask: size.w ? "url(#fluid-mask)" : undefined,
          WebkitMask: size.w ? "url(#fluid-mask)" : undefined,
        }}
      />

      <svg
        width="0"
        height="0"
        style={{ position: "absolute", width: 0, height: 0 }}
        aria-hidden
      >
        <defs>
          <filter id="fluid-distort" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="2"
              seed="1"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask
            id="fluid-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={size.w}
            height={size.h}
          >
            <rect x="0" y="0" width={size.w} height={size.h} fill="white" />
            <g filter="url(#fluid-distort)">
              <circle ref={circleRef} cx={-9999} cy={-9999} r={0} fill="black" />
            </g>
          </mask>
        </defs>
      </svg>
    </div>
  );
}
