import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import driverCasual from "@/assets/Base.png";
import driverSuit from "@/assets/Reveal.png";
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import { FluidReveal } from "@/components/FluidReveal";

export function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const parallaxX = useTransform(smoothX, [-1000, 1000], [-80, 80]);
  const parallaxY = useTransform(smoothY, [-1000, 1000], [-80, 80]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#ffffff] text-carbon">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-carbon"
          >
            <div className="relative flex flex-col items-center uppercase text-center">
              {/* Dim background text */}
              <div className="text-white/20">
                <div className="font-serif text-[18vw] md:text-[10vw] leading-[0.8] tracking-widest">Asma</div>
                <div className="font-black text-[20vw] md:text-[12vw] leading-[0.8] tracking-tighter">Salar</div>
              </div>
              
              {/* Bright text wiping over it */}
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 2.8, ease: "easeInOut", delay: 0.2 }}
                className="absolute inset-0 text-white"
              >
                <div className="font-serif text-[18vw] md:text-[10vw] leading-[0.8] tracking-widest">Asma</div>
                <div className="font-black text-[20vw] md:text-[12vw] leading-[0.8] tracking-tighter">Salar</div>
              </motion.div>
            </div>
            
            {/* UI Accents */}
            <div className="absolute top-10 left-10 text-[10px] font-black uppercase tracking-widest text-white/50 hidden md:block">
              [ FILE_06 ]
            </div>
            <div className="absolute top-10 right-10 text-[10px] font-black uppercase tracking-widest text-white/50 hidden md:block">
              DVS0204-2X25
            </div>
            
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white/50 text-xs hidden md:block">+</div>
            <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white/50 text-xs hidden md:block">+</div>
            
            <div className="absolute bottom-10 left-6 md:left-10 text-[10px] font-black uppercase tracking-widest text-white/50">
              Please wait...
            </div>
            
            <div className="absolute bottom-10 right-6 md:right-10 flex items-center justify-start w-[80px] md:w-[100px] h-[8px] border border-white/20 p-[1px]">
               <motion.div
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2.8, ease: "easeInOut", delay: 0.2 }}
                 className="h-full bg-white"
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 flex bg-carbon text-white overflow-hidden"
          >
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <rect width="100%" height="100%" fill="url(#topo)" />
            </svg>

            <div className="absolute top-0 left-0 right-0 flex items-start justify-between px-6 md:px-10 pt-6 md:pt-8 z-50">
              <div className="flex flex-col uppercase text-white">
                <div className="font-serif text-[28px] md:text-[38px] leading-[0.8] tracking-widest">Asma</div>
                <div className="font-black text-[34px] md:text-[46px] leading-[0.8] tracking-tighter">Salar</div>
              </div>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close Menu"
                  className="flex h-[42px] w-[48px] flex-col items-center justify-center rounded-xl border-2 border-white/20 bg-transparent hover:bg-white/10 transition-colors text-white"
                >
                  <X className="h-6 w-6 stroke-[2]" />
                </button>
              </div>
            </div>

            <div className="relative z-10 flex w-full h-full pt-[120px] px-6 md:px-10 pb-10">
              <div className="hidden md:flex w-1/2 gap-4 items-center justify-center overflow-hidden pr-10">
                <div className="flex flex-col gap-4 w-[45%] mt-12">
                  <img src={img1} className="w-full h-auto object-cover rounded-xl grayscale opacity-60" alt="Menu 1" />
                  <img src={img3} className="w-full h-auto object-cover rounded-xl grayscale opacity-60" alt="Menu 3" />
                </div>
                <div className="flex flex-col gap-4 w-[45%] -mt-12">
                  <img src={img2} className="w-full h-auto object-cover rounded-xl grayscale opacity-60" alt="Menu 2" />
                </div>
              </div>

              <div className="flex w-full md:w-1/2 flex-col justify-center items-end text-right pr-4 md:pr-10">
                <nav className="flex flex-col gap-1 uppercase font-black text-[50px] md:text-[80px] lg:text-[100px] leading-[0.85] tracking-tighter">
                  <a href="#" className="hover:text-rosso transition-colors relative group">
                    <span className="relative z-10">Home</span>
                    <motion.svg className="absolute top-[40%] -left-[10%] w-[120%] h-[30px] -translate-y-1/2 opacity-0 group-hover:opacity-100 z-0 text-rosso pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M0,10 Q25,25 50,10 T100,10" />
                    </motion.svg>
                  </a>
                  <a href="#" className="hover:text-rosso transition-colors">On Track</a>
                  <a href="#" className="hover:text-rosso transition-colors">Off Track</a>
                  <a href="#" className="hover:text-rosso transition-colors">Calendar</a>
                </nav>

                <div className="mt-auto flex flex-col items-end gap-6 text-[11px] font-black uppercase tracking-widest text-white/50">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-rosso/80 text-2xl leading-none">🏆</span>
                  </div>
                  <div className="text-right">
                    SCUDERIA FERRARI<br />SINCE 2023
                  </div>

                  <div className="mt-4 flex flex-col items-end gap-3 border-t border-white/20 pt-6">
                    <div className="text-white hover:text-rosso transition-colors cursor-pointer">BUSINESS ENQUIRIES</div>
                    <div className="flex gap-4 mt-1">
                      <a href="#" className="hover:text-white transition-colors">TIKTOK</a>
                      <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                      <a href="#" className="hover:text-white transition-colors">YOUTUBE</a>
                      <a href="#" className="hover:text-white transition-colors">TWITCH</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          y: isLoading ? 50 : 0,
          filter: isLoading ? "blur(10px)" : "blur(0px)"
        }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
        className="relative h-full w-full min-h-screen"
      >
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

      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{ x: parallaxX, y: parallaxY }}
      >
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
          className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-rosso/30 rounded-full blur-[100px] opacity-70"
        />
        <motion.div
          animate={{
            x: [0, -120, 120, 0],
            y: [0, 120, -120, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
          className="absolute bottom-1/4 -right-20 w-[50rem] h-[50rem] bg-giallo/30 rounded-full blur-[120px] opacity-70"
        />
      </motion.div>

      {/* Top bar */}
      <header className="relative z-30 flex items-start justify-between px-6 md:px-10 pt-6 md:pt-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="flex flex-col uppercase text-black"
        >
          <div className="font-serif text-[28px] md:text-[38px] leading-[0.8] tracking-widest">Asma</div>
          <div className="font-black text-[34px] md:text-[46px] leading-[0.8] tracking-tighter">Salar</div>
        </motion.div>



        <div className="flex items-center gap-6">
          <a
            href="#about-me"
            className="text-sm font-black uppercase tracking-widest text-black hover:opacity-60 transition-opacity"
          >
            ABOUT ME
          </a>
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Menu"
            className="flex h-[42px] w-[48px] flex-col items-center justify-center gap-[5px] rounded-xl border-2 border-carbon bg-transparent hover:bg-gray-50 transition-colors"
          >
            <div className="h-[2px] w-[14px] bg-carbon self-start ml-2.5" />
            <div className="h-[2px] w-6 bg-carbon" />
          </button>
        </div>
      </header>

      {/* Center driver — fluid hover reveal (centered editorial composition) */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center">
        <FluidReveal
          topSrc={driverCasual}
          bottomSrc={driverSuit}
          topAlt="Charles Leclerc casual portrait"
          bottomAlt="Charles Leclerc in Ferrari race suit"
          className="pointer-events-auto h-full w-full md:h-[85vh] md:w-[85vw] max-w-[900px]"
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
          SCUDERIA FERRARI<br />SINCE 1950
        </div>
      </motion.div>

      {/* Bottom-right meta */}
      <div className="absolute bottom-8 right-6 md:right-10 z-20 text-right text-[10px] font-black uppercase tracking-[0.3em] text-carbon/70">
        N°16 · Monégasque<br />
        <span className="text-rosso">Forza Ferrari</span>
      </div>
      </motion.div>
    </section>
  );
}
