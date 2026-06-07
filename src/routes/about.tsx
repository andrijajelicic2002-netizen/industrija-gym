import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { Clock, Heart, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "O nama | Industrija Gym Zrenjanin" },
      { name: "description", content: "Priča iza Industrija Gym-a — moderna teretana u centru Zrenjanina zasnovana na snazi, disciplini i pravom gostoprimstvu." },
      { property: "og:title", content: "O nama | Industrija Gym" },
      { property: "og:description", content: "Moderna teretana u centru Zrenjanina — snaga, disciplina, gostoprimstvo." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Clock, title: "Dostupnost i fleksibilnost", desc: "Centar grada, dugo radno vreme i FITPASS integracija — jer trening treba biti moguć, ne komplikovan." },
  { icon: Heart, title: "Ozbiljan pristup, topla atmosfera", desc: "Trud i disciplina su na prvom mestu — ali ne na štetu dobre atmosfere. Svaki član je dobrodošao i praćen od prvog koraka." },
  { icon: Target, title: "Rezultati kroz sistematičan rad", desc: "Nema prečica. Industrija Gym nudi prostor, opremu i znanje — na tebi je da doneseš trud, a mi smo tu da ga usmerimo pravo." },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-20 border-b border-border bg-[var(--color-surface)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.63_0.26_29_/_0.35),transparent_90%)]" />
        <div className="container-x relative">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5">O nama</div>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] max-w-4xl">
            Teretana napravljena za<br />ljude koji <span className="text-primary">ne odustaju</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Industrija Gym je izgrađena oko jedne ideje: da svaki čovek zaslužuje ozbiljan prostor za ozbiljan rad.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading eyebrow="Naša priča" title={<>Direktno. Toplo. Bez komplikacija.</>} />
          </div>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>Hteli smo teretanu koja se oseća kao Zrenjanin: direktna, topla i bez nepotrebnih komplikacija. Mesto gde se čovek oseća dobrodošlo od prvog dana — bez obzira na iskustvo ili cilj.</p>
            <p>Industrija Gym je smeštena u centru grada, Jevrejska 3A, dostupna svima. Radi skoro tokom celog dana — jer znamo da svačiji raspored nije isti i da pravi trening ne čeka.</p>
            <p>Kroz partnerstvo sa FITPASS-om i stalan rad na unapređenju opreme i programa, cilj nam je da Industrija ostane mesto na koje se vraća — ne zato što mora, već zato što se isplati.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container-x">
          <SectionHeading eyebrow="Naše vrednosti" title="Šta nas drži u poslu" />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className="border border-border bg-background p-8 hover:border-primary transition-colors">
                <v.icon className="h-10 w-10 text-primary" />
                <h3 className="font-display text-2xl mt-5">{v.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Tim"
            title={<>Ljudi iza <span className="text-primary">Industrije</span></>}
            description="Treneri i osoblje Industrija Gym-a biraju ovaj posao jer veruju u njega. Tempo drže visok, ali uvek znaju kad treba usporiti i prilagoditi se članu."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-border bg-[var(--color-surface)] overflow-hidden">
                {/* [TRAINER PHOTO] — Unsplash placeholder */}
                <div className="aspect-[3/4] bg-background overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${["1583500178690-f7fd39a44f50","1567013127542-490d757e51fc","1594381898411-846e7d193883","1571019613454-1cb2f99b2d8b"][i-1]}?w=600&q=80`}
                    alt="Trener"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="font-display text-xl">[TRAINER NAME]</div>
                  <div className="text-xs uppercase tracking-widest text-primary mt-1">Trener · Industrija</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-3">
            <Link to="/contact" className="btn-primary hover:btn-primary-hover">Postani član</Link>
            <Link to="/contact" className="btn-outline hover:bg-foreground hover:text-background">Kontaktiraj nas</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
