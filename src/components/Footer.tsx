export function Footer() {
  return (
    <footer id="about" className="relative z-10 bg-carbon overflow-hidden">
      <div className="px-6 md:px-12 pt-24 pb-12">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <span className="text-rosso text-xs font-bold tracking-[0.3em]">— TIFOSI</span>
            <p className="mt-6 text-2xl md:text-4xl font-medium leading-tight max-w-2xl" style={{ fontFamily: '"DM Sans", sans-serif' }}>
              "For some, Ferrari is a Formula 1 team.
              For her, it’s the emotion before lights out, the heartbreak after strategy calls, and the reason every Sunday feels cinematic.
              "
            </p>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">PRIMARY LANGUAGE</span><span className="font-bold">FORMULA 1</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">TEAM RADIO MOOD</span><span className="font-bold">MUST BE THE WATER</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">MIDNIGHT ACTIVITY</span><span className="font-bold">DARK ROMANCE SPIRALS</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">AVERAGE SLEEP</span><span className="font-bold">
                QUESTIONABLE</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <h3 className="text-[28vw] md:text-[20vw] font-black leading-[0.8] uppercase text-rosso tracking-tighter">
            Ferrari
          </h3>
          <span className="absolute top-4 right-0 text-giallo text-4xl md:text-6xl">★</span>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-bold tracking-widest uppercase text-muted-foreground border-t border-border pt-8">
          <span>© 2026 · Designed by Shreemanth K</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-rosso transition-colors">Instagram</a>
            <a href="#" className="hover:text-rosso transition-colors">YouTube</a>
            <a href="#" className="hover:text-rosso transition-colors">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}