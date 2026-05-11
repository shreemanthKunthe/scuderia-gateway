import { motion } from "framer-motion";
import { ShoppingBag, Minus } from "lucide-react";
import driverCasual from "@/assets/driver-casual.png";
import driverSuit from "@/assets/driver-suit.png";
import { FluidReveal } from "@/components/FluidReveal";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f4f2ed] text-carbon">
      {/* Topographic pattern bg */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="topo" x="0" y="0" width="600" height="600" patternUnits="userSpaceOnUse">
            <path
              d="M-50 300 Q 150 120 350 280 T 750 260 M -50 420 Q 180 260 380 400 T 760 380 M -50 180 Q 200 40 400 160 T 780 160"
              fill="none"
              stroke="#0b0b0b"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>

      {/* Top bar */}
      <header className="relative z-30 flex items-start justify-between px-6 md:px-10 pt-6 md:pt-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="font-black uppercase leading-[0.85] text-[42px] md:text-[64px] tracking-tight"
        >
          <div>Charles</div>
          <div>Leclerc</div>
        </motion.div>

        <div className="hidden md:flex flex-col items-center gap-1 pt-3">
          <div className="text-rosso text-3xl leading-none">▲</div>
          <div className="text-[10px] font-black tracking-[0.3em]">SF · 2026</div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-md bg-giallo px-4 py-3 text-xs font-black uppercase tracking-widest text-carbon hover:scale-[1.03] ease-premium transition-transform"
          >
            <ShoppingBag className="h-4 w-4" />
            Store
          </a>
          <button
            aria-label="Menu"
            className="rounded-md border border-carbon/30 p-3 hover:bg-carbon hover:text-background ease-premium transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Center driver — fluid hover reveal (fullscreen) */}
      <div className="absolute inset-0 z-10">
        <FluidReveal
          topSrc={driverCasual}
          bottomSrc={driverSuit}
          topAlt="Charles Leclerc casual portrait"
          bottomAlt="Charles Leclerc in Ferrari race suit"
          className="absolute inset-0"
        />
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-20 rounded-full bg-carbon/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-background backdrop-blur">
          Hover · Suit Up
        </div>
      </div>

      {/* Next race card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-6 left-6 md:left-10 z-20 w-[160px] border border-carbon/20 bg-background/40 backdrop-blur-sm"
      >
        <div className="border-b border-carbon/20 px-3 py-2 text-[10px] font-black uppercase tracking-widest">
          Next Race
        </div>
        <div className="flex items-center justify-center px-3 py-4">
          <svg viewBox="0 0 100 40" className="h-10 w-full text-carbon" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 25 Q 15 5 35 12 T 70 18 Q 90 22 95 32 L 70 35 Q 50 30 30 33 Z" />
          </svg>
        </div>
        <div className="border-t border-carbon/20 px-3 py-2 text-[11px] font-black uppercase tracking-widest text-center">
          Monaco GP
        </div>
        <div className="flex items-center justify-center gap-1 border-t border-carbon/20 px-3 py-3">
          <span className="text-rosso text-xl leading-none">🏆</span>
        </div>
        <div className="border-t border-carbon/20 px-3 py-2 text-center text-[9px] font-black tracking-widest">
          SCUDERIA FERRARI<br/>SINCE 1950
        </div>
      </motion.div>

      {/* Bottom-right meta */}
      <div className="absolute bottom-8 right-6 md:right-10 z-20 text-right text-[10px] font-black uppercase tracking-[0.3em] text-carbon/70">
        N°16 · Monégasque<br/>
        <span className="text-rosso">Forza Ferrari</span>
      </div>
    </section>
  );
}
