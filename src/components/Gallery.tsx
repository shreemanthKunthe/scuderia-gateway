import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const paragraphVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0.15, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  const renderWords = (text: string, className: string = "") => {
    return text.split(" ").map((word, i) => (
      <motion.span key={word + i} variants={wordVariants} className={`inline-block ${className}`}>
        {word}
      </motion.span>
    ));
  };

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-carbon px-2 py-16 md:px-4 md:py-24 text-center"
    >
      {/* Background Topo */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="topo2" x="0" y="0" width="600" height="600" patternUnits="userSpaceOnUse">
            <path
              d="M-50 300 Q 150 120 350 280 T 750 260 M -50 420 Q 180 260 380 400 T 760 380 M -50 180 Q 200 40 400 160 T 780 160"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo2)" />
      </svg>

      <motion.div style={{ y }} className="relative z-10 w-full px-2 md:px-4">
        <motion.div
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          className="mx-auto flex w-full flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em] text-[10vw] md:text-[6.5vw] font-black uppercase leading-[0.9] tracking-tighter text-white"
        >
          {renderWords("THROUGH FAST LAPS,", "font-serif text-giallo font-normal italic")}
          {renderWords("SLOW SUNDAYS, DARK ROMANCE PAGES, AND RACE-DAY EMOTIONS, SHE TURNS FORMULA 1 INTO MORE THAN A SPORT — A PASSION")}
          {renderWords("CARRIED FAR", "font-serif text-giallo font-normal italic")}
          {renderWords("PAST THE CHEQUERED FLAG, ON AND OFF THE TRACK.")}
        </motion.div>
      </motion.div>
    </section>
  );
}