import { motion } from "framer-motion";

const stats = [
  { value: "16", label: "World Titles", sub: "Constructors' Championships" },
  { value: "248", label: "Grand Prix Wins", sub: "Since 1950" },
  { value: "252", label: "Pole Positions", sub: "Front of the grid" },
  { value: "812", label: "Podiums", sub: "On the box" },
];

export function Stats() {
  return (
    <section id="stats" className="relative bg-rosso text-background overflow-hidden">
      <div className="px-6 md:px-12 py-24 md:py-40">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="text-background/70 text-xs font-bold tracking-[0.3em]">— LEGACY · 1929 → ∞</span>
            <h2 className="mt-4 text-6xl md:text-8xl font-black uppercase leading-[0.9]">
              Numbers <br /> never lie.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-background/30">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.77, 0, 0.175, 1] }}
              className="border-b md:border-r border-background/30 p-6 md:p-10 last:border-r-0"
            >
              <div className="text-[10px] font-bold tracking-[0.25em] mb-6 opacity-70">N° 0{i + 1}</div>
              <div className="text-7xl md:text-[8rem] font-black leading-none tracking-tighter">
                {s.value}
              </div>
              <div className="mt-6 text-sm font-bold uppercase tracking-widest">{s.label}</div>
              <div className="mt-1 text-xs opacity-70">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}