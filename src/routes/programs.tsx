import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { Check, Dumbbell, UserCog, Users } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programi & Cenovnik | Industrija Gym Zrenjanin" },
      { name: "description", content: "Trening snage, kardio, personalni treninzi i grupni programi u Industrija Gym-u. Cenovnik članarina i FITPASS." },
      { property: "og:title", content: "Programi & Cenovnik | Industrija Gym" },
      { property: "og:description", content: "Sve članarine, programi i FITPASS u Industrija Gym Zrenjanin." },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    icon: Dumbbell, title: "Samostalni trening",
    items: [
      "Neograničen pristup svim zonama sale",
      "Slobodni tegovi, mašine, kardio oprema",
      "Dolaziš kad tebi odgovara — bez rezervacija",
      "FITPASS kartica prihvaćena",
    ],
  },
  {
    icon: UserCog, title: "Personalni trening",
    items: [
      "Individualan program prema tvom cilju i nivou",
      "Nadzor i korekcija tehnike od strane iskusnog trenera",
      "Idealno za početnike i one koji hoće brže rezultate",
      "Termini po dogovoru",
    ],
  },
  {
    icon: Users, title: "Grupni treninzi",
    items: [
      "Zajednički treninzi u motivacionoj atmosferi",
      "Različiti formati — snaga, kondicija, funkcionalni trening",
      "Termini i kapacitet — javite se za raspored",
    ],
  },
];

const prices = [
  { name: "Dnevna ulaznica", price: "300", unit: "RSD / Dan", popular: true},
  { name: "Mesečna članarina muška", price: "3000", unit: "RSD / mesec", popular: false  },
  { name: "Mesečna članarina ženska", price: "2700", unit: "RSD / mesec", popular: true },
  { name: "Radnici MUP-a", price: "1700", unit: "RSD / mesec", popular: false },
  { name: "Jutarnji paket 08-11H", price: "2700", unit: "RSD / mesec", popular: true },
  { name: "Plan Ishrane", price: "2700", unit: "RSD", popular: false },
  { name: "Mesečni plan ishrane", price: "2700", unit: "RSD", popular: true },
  { name: "Studenti", price: "2700", unit: "fRSD / mesec", popular: false},
  { name: "FITPASS", price: "Prihvaćen", unit: "fitpass.rs", popular: true},
];

function ProgramsPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-20 border-b border-border bg-[var(--color-surface)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.63_0.26_29_/_0.35),transparent_90%)]" />
        <div className="container-x relative">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5">Programi & Cenovnik</div>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] max-w-4xl">
            Alergija na monotoniju?<br /><span className="text-primary">Dolaziš na pravo mesto.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Industrija Gym — Zrenjanin, Jevrejska 3A. Trening snage, kardio, personalni treninzi i grupni programi.
            Nisi siguran koji program odgovara tebi? Piši nam na <a href="mailto:industrijagym@gmail.com" className="text-primary underline">industrijagym@gmail.com</a> — pomoći ćemo.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Programi" title="Šta nudimo" />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {programs.map((p, i) => (
              <div key={i} className="border border-border bg-[var(--color-surface)] p-8 hover:border-primary transition-colors">
                <p.icon className="h-10 w-10 text-primary" />
                <h3 className="font-display text-2xl mt-5">{p.title}</h3>
                <ul className="mt-5 space-y-3">
                  {p.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-sm text-foreground/90">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cenovnik" className="py-24 bg-[var(--color-surface)] scroll-mt-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Cenovnik"
            title={<>Članarine i <span className="text-primary">paketi</span></>}
            description="Cene su iskazane u RSD. Za detalje i aktuelne pakete piši nam direktno na INSTAGRAM."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {prices.map((p, i) => (
              <div key={i} className={`relative border bg-background p-8 ${p.popular ? "border-primary" : "border-border"}`}>
               
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.name}</div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl text-foreground">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.unit}</span>
                </div>
                <Link to="/contact" className="mt-6 inline-flex btn-outline hover:bg-foreground hover:text-background">
                  Informiši se
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border border-border bg-background p-6">
            <div>
              <div className="font-display text-2xl">FITPASS prihvaćen</div>
              <div className="text-sm text-muted-foreground mt-1">Pogledaj dostupne pakete na fitpass.rs</div>
            </div>
            <div className="inline-flex items-center gap-2 border border-primary text-primary px-3 py-1.5 text-xs font-bold tracking-widest uppercase">
              {/* [FITPASS LOGO] */}FITPASS Partner
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
