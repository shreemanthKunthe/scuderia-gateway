import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-ferrari.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-carbon">
      {/* Top nav */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <span className="text-giallo text-2xl">★</span>
          <span className="font-black tracking-widest text-sm">SCUDERIA</span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase">
          <a href="#gallery" className="hover:text-rosso ease-premium transition-colors">Gallery</a>
          <a href="#stats" className="hover:text-rosso ease-premium transition-colors">Stats</a>
          <a href="#about" className="hover:text-rosso ease-premium transition-colors">About</a>
        </nav>
        <div className="text-xs font-bold tracking-widest text-rosso">FORZA · 2026</div>
      </header>

      {/* Background image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ferrari Formula 1 SF-24 race car on track"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/80 via-transparent to-transparent" />
      </motion.div>

      {/* Massive impact text */}
      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32 px-6 md:px-12">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="flex items-end gap-4 mb-2"
        >
          <span className="text-rosso text-xs font-bold tracking-[0.3em]">N°16 · MONACO</span>
        </motion.div>

        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
          className="text-[18vw] md:text-[14vw] leading-[0.85] font-black uppercase mix-blend-difference"
        >
          Forza
        </motion.h1>
        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.77, 0, 0.175, 1] }}
          className="text-[18vw] md:text-[14vw] leading-[0.85] font-black uppercase text-rosso -mt-2 md:-mt-4"
        >
          Ferrari
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <p className="max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
            A tribute to Maranello — the speed, the soul, the Cavallino Rampante. Where engineering becomes art and every lap is a love letter to red.
          </p>
          <a
            href="#gallery"
            className="group inline-flex items-center gap-3 self-start border border-foreground/30 px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] hover:bg-rosso hover:border-rosso ease-premium transition-all duration-500"
          >
            Scroll to unlock
            <span className="inline-block h-px w-8 bg-foreground group-hover:w-16 ease-premium transition-all duration-500" />
          </a>
        </motion.div>
      </motion.div>

      {/* Side gauge */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-3 text-[10px] font-bold tracking-widest text-muted-foreground">
        <span className="rotate-90 origin-center whitespace-nowrap">SF · 24 / RPM 15.000</span>
      </div>
    </section>
  );
}