interface MarqueeProps {
  text: string;
  duration?: number;
  reverse?: boolean;
  accent?: boolean;
}

export function Marquee({ text, duration = 30, reverse, accent }: MarqueeProps) {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className={`overflow-hidden border-y border-border py-6 ${accent ? "bg-rosso" : "bg-carbon"}`}>
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.concat(items).map((i) => (
          <span
            key={i}
            className={`mx-8 text-5xl md:text-7xl font-black tracking-tighter ${
              accent ? "text-background" : "text-foreground"
            }`}
          >
            {text} <span className="text-giallo">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}