import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { X } from "lucide-react";
import slika1 from "@/assets/Screenshot 2026-06-07 150255.png";
import slika2 from "@/assets/Screenshot 2026-06-07 150347.png";
import slika3 from "@/assets/Screenshot 2026-06-07 150432.png";
import slika4 from "@/assets/Screenshot 2026-06-07 150514.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galerija | Industrija Gym Zrenjanin" },
      { name: "description", content: "Pogled iznutra — prostor, oprema, treninzi i atmosfera Industrija Gym-a u Zrenjaninu." },
      { property: "og:title", content: "Galerija | Industrija Gym" },
      { property: "og:description", content: "Prostor, oprema, treninzi i atmosfera Industrija Gym-a." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Cat = "Sve" | "Prostor" | "Treninzi" | "Tim" | "Transformacije";
const images: { src: string; cat: Exclude<Cat, "Sve"> }[] = [
  { src: slika1, cat: "Prostor" },
  { src: slika2, cat: "Prostor" },
  { src: slika3, cat: "Prostor" },
  { src: slika4, cat: "Prostor" },
];

const cats: Cat[] = ["Sve", "Prostor", "Treninzi", "Tim", "Transformacije"];

function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("Sve");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = filter === "Sve" ? images : images.filter((i) => i.cat === filter);

  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-12 border-b border-border bg-[var(--color-surface)]">
        <div className="container-x">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5">Galerija</div>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
            Industrija Gym u <span className="text-primary">trenucima</span>.
          </h1>
          <p className="mt-5 italic text-muted-foreground max-w-2xl">
            Prostor. Tegovi. Znoj. Rezultati. Ljudi koji ne odustaju.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-border">
        <div className="container-x flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
                filter === c ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(img.src)}
              className="group relative overflow-hidden bg-[var(--color-surface)] aspect-square"
            >
              <img src={img.src} alt={img.cat} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-end p-4">
                <span className="text-xs uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">{img.cat}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-border text-center">
        <Link to="/contact" className="btn-primary hover:btn-primary-hover">Postani član</Link>
      </section>

      {open && (
        <div className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button aria-label="Zatvori" className="absolute top-6 right-6 p-2 text-foreground"><X className="h-7 w-7" /></button>
          <img src={open} alt="" className="max-w-full max-h-full object-contain" />
        </div>
      )}

      <SiteFooter />
    </div>
  );
}