export function Footer() {
  return (
    <footer id="about" className="relative bg-carbon overflow-hidden">
      <div className="px-6 md:px-12 pt-24 pb-12">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <span className="text-rosso text-xs font-bold tracking-[0.3em]">— TIFOSI</span>
            <p className="mt-6 text-2xl md:text-4xl font-black leading-tight max-w-2xl">
              "Ferrari is not just a team. It's a feeling that runs in the blood of millions."
            </p>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Founded</span><span className="font-bold">1929</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">HQ</span><span className="font-bold">Maranello, IT</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Founder</span><span className="font-bold">Enzo Ferrari</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Engine</span><span className="font-bold">066/12 V6 Hybrid</span>
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
          <span>© 2026 · Fan Tribute · Not affiliated with Scuderia Ferrari</span>
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