import { motion } from "framer-motion";
import helmet from "@/assets/gallery-helmet.jpg";
import pit from "@/assets/gallery-pit.jpg";
import corner from "@/assets/gallery-corner.jpg";
import wheel from "@/assets/gallery-wheel.jpg";
import rear from "@/assets/gallery-rear.jpg";

const items = [
  { src: helmet, label: "The Helmet", meta: "01 / VISOR", span: "md:row-span-2" },
  { src: pit, label: "Box Box", meta: "02 / PIT LANE", span: "" },
  { src: corner, label: "Apex", meta: "03 / TURN 8", span: "" },
  { src: wheel, label: "Cockpit", meta: "04 / 1000 INPUTS", span: "" },
  { src: rear, label: "Afterburn", meta: "05 / DRS OPEN", span: "md:row-span-2" },
  { src: pit, label: "Maranello", meta: "06 / HOME", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-carbon-grad px-6 md:px-12 py-24 md:py-40">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-rosso text-xs font-bold tracking-[0.3em]">— ARCHIVIO</span>
          <h2 className="mt-4 text-6xl md:text-9xl font-black uppercase leading-[0.9]">
            Frames of <br /> <span className="text-rosso italic">passione</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Hover each frame. Every shot — a heartbeat from the box wall to the chequered flag.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[repeat(4,_18rem)] md:grid-rows-[repeat(2,_24rem)] gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.77, 0, 0.175, 1] }}
            className={`group relative overflow-hidden bg-secondary cursor-pointer ${item.span}`}
          >
            <img
              src={item.src}
              alt={item.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover grayscale-[0.6] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[1200ms] ease-premium"
              style={{ clipPath: "circle(140% at 50% 50%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
            {/* Reveal mask */}
            <div className="absolute inset-0 bg-rosso transition-all duration-[900ms] ease-premium"
              style={{ clipPath: "circle(0% at 50% 100%)" }}
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <span className="text-[10px] font-bold tracking-[0.25em] text-giallo">{item.meta}</span>
              <div>
                <h3 className="text-3xl md:text-5xl font-black uppercase leading-none translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-premium">
                  {item.label}
                </h3>
                <div className="mt-3 h-px w-0 bg-rosso group-hover:w-full transition-all duration-700 ease-premium" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}