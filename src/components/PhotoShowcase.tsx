import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/5.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import wheelImg from "@/assets/SF1.png";

const photos = [
  {
    id: 1,
    src: img1,
    caption: "MONZA, 2023",
    className: "absolute top-[10%] left-[10vw] w-[40vw] md:w-[22vw]",
  },
  {
    id: 2,
    src: img2,
    caption: "SILVERSTONE, 2024",
    className: "absolute top-[50%] left-[60vw] w-[45vw] md:w-[25vw]",
  },
  {
    id: 3,
    src: img3,
    caption: "MARANELLO, 2024",
    className: "absolute top-[15%] left-[110vw] w-[35vw] md:w-[18vw]",
  },
  {
    id: 4,
    src: img4,
    caption: "SINGAPORE, 2023",
    className: "absolute top-[55%] left-[150vw] w-[40vw] md:w-[20vw]",
  },
  {
    id: 5,
    src: img5,
    caption: "AUSTIN, 2024",
    // Make the fifth image massive, mimicking the reference image on the right edge
    className: "absolute top-0 left-[260vw] w-[90vw] md:w-[70vw] h-screen flex flex-col justify-center",
  },
];

export function PhotoShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Container is 350vw. We want to move by -250vw to show the last 100vw.
  // -250 / 350 = -71.428%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-71.428%"]);

  return (
    <section 
      ref={containerRef} 
      className={`relative h-[400vh] bg-[#dedcd2] ${isHovering ? "cursor-none" : ""}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
            className="fixed top-0 left-0 pointer-events-none z-[100]"
            style={{ 
              x: mousePos.x - 40,
              y: mousePos.y - 40 
            }}
          >
            <img src={wheelImg} alt="" className="w-20 h-20 object-contain" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <motion.div style={{ x }} className="relative flex h-full w-[350vw]">

          {/* Topographic pattern bg similar to Hero */}
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-[0.15]"
            animate={{ x: [0, -600], y: [0, -600] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ width: "calc(100% + 600px)", height: "calc(100% + 600px)" }}
          >
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <pattern id="photo-topo" x="0" y="0" width="600" height="600" patternUnits="userSpaceOnUse">
                  <path
                    d="M-50 300 Q 150 120 350 280 T 750 260 M -50 420 Q 180 260 380 400 T 760 380 M -50 180 Q 200 40 400 160 T 780 160"
                    fill="none"
                    stroke="#a3a196"
                    strokeWidth="2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#photo-topo)" />
            </svg>
          </motion.div>

          {photos.map((photo) => (
            <div key={photo.id} className={photo.className}>
              <div className="flex flex-col h-full justify-center">
                <p className="mb-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#7a786f]">
                  {photo.caption}
                </p>
                <div className={`relative overflow-hidden bg-carbon/5 ${photo.id === 5 ? 'h-[85vh] w-full' : 'w-full'}`}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className={`object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out ${photo.id === 5 ? '' : 'max-h-[60vh] hover:scale-105'}`}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Text block at the end of the scroll, positioned right before the 5th huge image */}
          <div className="absolute bottom-[10%] left-[190vw] md:left-[210vw] max-w-[85vw] md:max-w-[40vw]">
            <p className="text-xl md:text-4xl font-serif text-[#4a4943] leading-relaxed">
              Since I was 7 years old, my only dream was to experience what this feels like. I've worked tirelessly to make it happen.
            </p>
            <div className="mt-8">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                <path d="M10 20 C 30 10, 40 30, 60 20 S 90 10, 110 20" stroke="#4a4943" strokeWidth="2" strokeLinecap="round" />
                <path d="M40 25 C 50 15, 70 35, 90 20" stroke="#4a4943" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
