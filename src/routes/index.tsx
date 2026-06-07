import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import heroImg from "@/assets/hero-gym.jpg";
import { ArrowRight, Clock, MapPin, Mail, CheckCircle2, Dumbbell, HeartPulse, UserCog, Users, Calendar, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Industrija Gym | Teretana u centru Zrenjanina — Snaga & Fitnes" },
      { name: "description", content: "Moderna teretana u srcu Zrenjanina, Jevrejska 3A. Treninzi snage, grupni programi i personalni treninzi. Prihvatamo FITPASS." },
      { property: "og:title", content: "Industrija Gym — Home of Strength and Fitness" },
      { property: "og:description", content: "Teretana u centru Zrenjanina. Snaga, kondicija, personalni treninzi. FITPASS prihvaćen." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

// Unsplash placeholders — gym/fitness imagery
const zones = [
  { title: "Slobodni tegovi", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80", desc: "Šipke, bučice, ploče i ozbiljna oprema za rad na snazi." },
  { title: "Kardio zona", img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80", desc: "Trake, bicikli za kondiciju i sagorevanje." },
  { title: "Funkcionalna zona", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80", desc: "Prostor za istezanje, mobilnost i funkcionalni trening." },
  { title: "Svlačionice", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80", desc: "Čiste, opremljene svlačionice za udoban dolazak i odlazak." },
];

const programs = [
  { icon: Dumbbell, title: "Trening snage", desc: "Slobodni tegovi, mašine i ozbiljna oprema za sve koji hoće da grade snagu i mišićnu masu. Za početnike i iskusne vežbače — u svom tempu." },
  { icon: HeartPulse, title: "Kardio i kondicija", desc: "Moderna kardio oprema za poboljšanje kondicije, sagorevanje kalorija i očuvanje zdravlja srca. Idealno kao dopuna treningu snage ili samostalno." },
  { icon: UserCog, title: "Personalni trening", desc: "Individualni pristup, program skrojen po tvojim ciljevima i nadzor iskusnog trenera. Za one koji hoće brže rezultate i siguran napredak." },
];

const events = [
  { icon: Users, title: "Grupni izazovi", desc: "Povremeni grupni treninzi i motivacioni izazovi za članove koji hoće više od rutine." },
  { icon: Sparkles, title: "FITPASS partnerstvo", desc: "Industrija Gym je deo FITPASS mreže — veći izbor, veća fleksibilnost za sve članove." },
  { icon: Calendar, title: "Otvoreni treninzi", desc: "Slobodan pristup sali gotovo tokom celog dana — dolaziš kad tebi odgovara, bez rezervacija." },
];

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader transparentOnTop />

      {/* HERO */}
      <section className="relative min-h-dvh flex items-end overflow-hidden">
        <img src={heroImg} alt="Industrija Gym — sala" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.72_0.20_38_/_0.15),transparent_60%)]" />
        <div className="relative container-x pb-24 pt-32 fade-up">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Zrenjanin · Jevrejska 3A</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9] max-w-5xl">
            Home of <span className="text-primary">Strength</span><br />and Fitness.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80 leading-relaxed">
            Industrija Gym je mesto gde se ozbiljan rad susreće s pravom atmosferom.
            U centru Zrenjanina, svaki dan — za sve koji biraju da ne stanu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary hover:btn-primary-hover inline-flex gap-2">
              Postani član <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/programs" className="btn-outline hover:bg-foreground hover:text-background">
              Pogledaj programe
            </Link>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 border border-primary/60 text-primary px-3 py-1.5 text-xs font-bold tracking-widest uppercase">
            {/* [FITPASS LOGO] */}
            FITPASS prihvaćen
          </div>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="bg-[var(--color-surface)] border-y border-border">
        <div className="container-x grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { icon: MapPin, label: "Lokacija", val: "Jevrejska 3A, Zrenjanin" },
            { icon: Clock, label: "Pon–Sub", val: "08:00 — 00:00" },
            { icon: Clock, label: "Nedelja", val: "14:00 — 23:00" },
            { icon: Mail, label: "Email", val: "industrijagym@gmail.com" },
          ].map((it, i) => (
            <div key={i} className="flex items-center gap-4 py-6 md:px-6">
              <it.icon className="h-6 w-6 text-primary" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{it.label}</div>
                <div className="text-sm font-semibold">{it.val}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POSITIONING */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Zašto baš Industrija?"
              title={<>Centar grada.<br /><span className="text-primary">Bez izgovora.</span></>}
              description="Smešteni smo u samom centru Zrenjanina, na Jevrejskoj 3A — lako dostupni, bez izgovora. Radi skoro 24 sata, od ponedeljka do subote od 08:00 do ponoći, a nedeljom od 14:00 do 23:00. Prihvatamo FITPASS karticu i dobrodošli su svi — rekreativci, takmičari i svi koji su ozbiljni u svom cilju."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Centar grada — Jevrejska 3A",
                "Skoro 24h dostupna sala",
                "FITPASS partner",
                "Početnici i iskusni — dobrodošli",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" alt="" className="h-72 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80" alt="" className="h-72 w-full object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Naš prostor"
            title={<>Zone i sadržaj</>}
            description="Industrija Gym nudi potpuno opremljen prostor za trening snage i kondicije u centru Zrenjanina. Svaka zona je osmišljena da podržava napredak — od prvog do poslednjeg ponavljanja."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {zones.map((z, i) => (
              <div key={i} className="group relative overflow-hidden border border-border bg-background">
                <img src={z.img} alt={z.title} loading="lazy" className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <h3 className="font-display text-2xl">{z.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{z.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeading
              eyebrow="Naši programi"
              title={<>Tri puta do <span className="text-primary">istog cilja</span></>}
            />
            <Link to="/programs" className="btn-outline hover:bg-foreground hover:text-background">Svi programi</Link>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {programs.map((p, i) => (
              <div key={i} className="group border border-border bg-[var(--color-surface)] p-8 hover:border-primary transition-colors">
                <p.icon className="h-10 w-10 text-primary" />
                <h3 className="font-display text-3xl mt-6">{p.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
                <Link to="/programs" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:gap-3 transition-all">
                  Saznaj više <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Dogadjaji"
            title={<>Više od rutine</>}
            description="Od individualnih treninga do grupnih izazova — Industrija Gym je prostor koji se prilagođava tvojim ambicijama."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {events.map((e, i) => (
              <div key={i} className="border border-border p-8 bg-background">
                <e.icon className="h-8 w-8 text-primary" />
                <h3 className="font-display text-2xl mt-5">{e.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary hover:btn-primary-hover">Kontaktiraj nas</Link>
            <Link to="/contact" className="btn-outline hover:bg-foreground hover:text-background">Postani član</Link>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Kako do nas" title={<>U srcu <span className="text-primary">Zrenjanina</span></>} />
            <ul className="mt-8 space-y-5">
              {[
                ["Pešice", "Jevrejska 3A je u samom centru Zrenjanina — nekoliko minuta hoda od glavnih ulica."],
                ["Autom / taksijem", "Jednostavan drop-off u centru grada."],
                ["Gradski prevoz", "Više linija gradskog prevoza u blizini."],
                ["Parking", "Dostupan u okolini centra."],
              ].map(([t, d], i) => (
                <li key={i} className="border-l-2 border-primary pl-5">
                  <div className="font-display text-xl uppercase tracking-wider">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border overflow-hidden min-h-[400px]">
            <iframe
              title="Mapa — Jevrejska 3A, Zrenjanin"
              src="https://www.google.com/maps?q=Jevrejska+3A,+Zrenjanin&output=embed"
              className="w-full h-full min-h-[400px] grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TEAM CTA */}
      <section className="py-24 bg-[var(--color-surface)] border-y border-border">
        <div className="container-x text-center">
          <SectionHeading
            align="center"
            eyebrow="Upoznajte domaćine"
            title={<>Tim koji <span className="text-primary">živi</span> ono što predaje</>}
            description="Tim Industrija Gym-a čine treneri koji žive ono što predaju. Fokus je na rezultatima — bez praznih obećanja, samo sistematičan rad i podrška na svakom koraku."
          />
          <div className="mt-10 flex justify-center gap-3">
            <Link to="/about" className="btn-primary hover:btn-primary-hover">Naša priča</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
