import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Gallery } from "@/components/Gallery";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Forza Ferrari — A Tribute to Scuderia Ferrari F1" },
      { name: "description", content: "An immersive fan tribute to Scuderia Ferrari Formula 1. Carbon, red, and the roar of Maranello." },
      { property: "og:title", content: "Forza Ferrari — F1 Tribute" },
      { property: "og:description", content: "Immersive Ferrari F1 fan experience. Carbon, red, the roar of Maranello." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-carbon text-foreground">
      <Hero />
      <Marquee text="SCUDERIA FERRARI · FORZA FERRARI · ASMA SALAR" duration={40} />
      <Gallery />
      <Marquee text="MARANELLO · 1929 · ROSSO CORSA · TIFOSI" duration={28} reverse accent />
      <Stats />
      <Footer />
    </main>
  );
}
