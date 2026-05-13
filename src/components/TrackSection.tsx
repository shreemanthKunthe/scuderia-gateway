import { motion } from "framer-motion";
import helmetImg from "@/assets/Reveal.png";
import driverImg from "@/assets/Base.png";

export function TrackSection() {
  return (
    <section className="sticky top-0 z-0 flex h-screen items-center justify-center overflow-hidden bg-[#f1efe7] text-carbon">
      {/* Topographic pattern bg */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        animate={{ backgroundPosition: ["0px 0px", "-600px -600px"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 100 Q 150 40 300 100 T 600 100 M 0 210 Q 150 150 300 210 T 600 210 M 0 320 Q 150 260 300 320 T 600 320 M 0 430 Q 150 370 300 430 T 600 430 M 0 530 Q 150 470 300 530 T 600 530' fill='none' stroke='%23a3a196' stroke-width='1.5' opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: "600px 600px"
        }}
      />

      {/* Left Image (Driver) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        viewport={{ once: true }}
        className="absolute left-0 top-0 bottom-0 w-[35vw] md:w-[32vw] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to right, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 60%, transparent 100%)"
        }}
      >
        <img src={driverImg} alt="Driver" className="w-full h-full object-cover object-[80%_center]" />
      </motion.div>

      {/* Right Image (Helmet) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        viewport={{ once: true }}
        className="absolute right-0 top-0 bottom-0 w-[35vw] md:w-[32vw] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to left, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)"
        }}
      >
        <img src={helmetImg} alt="Helmet" className="w-full h-full object-cover object-[20%_center] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]" />
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col md:flex-row items-center justify-center gap-16 md:gap-24 px-6">

        {/* On Track */}
        <div className="flex flex-col items-center text-center max-w-[280px]">
          <div className="relative flex flex-col items-center leading-none">
            <span className="font-serif text-[70px] md:text-[90px] text-[#2c2b26]">ON</span>
            <span className="font-black text-[55px] md:text-[75px] tracking-tighter text-[#2c2b26] -mt-5 md:-mt-6">TRACK</span>

            {/* The Script 'ON' overlay using SVG path for authenticity */}
            <div className="absolute top-[5%] md:top-[10%] left-1/2 -translate-x-1/2 -translate-y-6 md:-translate-y-10 pointer-events-none z-10 w-[140px] md:w-[180px] h-[140px] md:h-[180px]">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-giallo drop-shadow-md">
                <path d="M40,110 C20,70 60,30 90,40 C110,50 90,130 60,110" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M100,100 C110,40 130,30 140,90 C150,130 160,60 180,30" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <p className="mt-6 md:mt-8 text-[#4a4943] text-sm md:text-base leading-relaxed font-medium" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            Most recent results, career stats and photos from trackside.
          </p>

          <button className="mt-6 md:mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-carbon text-white hover:scale-105 transition-transform duration-300 shadow-[0_8px_20px_rgba(11,11,11,0.3)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-40 bg-[#a3a196]/40" />

        {/* Off Track */}
        <div className="flex flex-col items-center text-center max-w-[280px]">
          <div className="relative flex flex-col items-center leading-none">
            <span className="font-serif text-[70px] md:text-[90px] text-[#2c2b26]">OFF</span>
            <span className="font-black text-[55px] md:text-[75px] tracking-tighter text-[#2c2b26] -mt-5 md:-mt-6">TRACK</span>
          </div>

          <p className="mt-6 md:mt-8 text-[#4a4943] text-sm md:text-base leading-relaxed font-medium" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            Campaigns, shoots and other such promotional materials for fans.
          </p>

          <button className="mt-6 md:mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-carbon text-white hover:scale-105 transition-transform duration-300 shadow-[0_8px_20px_rgba(11,11,11,0.3)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
