import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MapPin, Clock, Instagram, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt | Industrija Gym Zrenjanin" },
      { name: "description", content: "Kontaktirajte Industrija Gym — email, adresa, radno vreme i informacije o članarini." },
      { property: "og:title", content: "Kontakt | Industrija Gym" },
      { property: "og:description", content: "Email, adresa, radno vreme i forma za kontakt." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-12 border-b border-border bg-[var(--color-surface)]">
        <div className="container-x">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5">Kontakt</div>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
            Kontaktirajte <span className="text-primary">nas</span>.
          </h1>
          <p className="mt-5 italic text-muted-foreground max-w-2xl">
            Pitanja o programima, članarini ili personalnom treningu — pišite slobodno.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "Email", val: "industrijagym@gmail.com", href: "mailto:industrijagym@gmail.com" },
              { icon: MapPin, label: "Adresa", val: "Jevrejska 3A, Zrenjanin (centar grada)", href: "https://www.google.com/maps/place/Industrija+Gym/@45.3787468,20.3934242,19.62z/data=!4m15!1m8!3m7!1s0x475adb410f74d5c1:0xa28ad3e72614c58d!2sJevrejska+3A,+Zrenjanin+23000,+Serbia!3b1!8m2!3d45.3785682!4d20.3933506!16s%2Fg%2F11xzswv8lx!3m5!1s0x475adb6cb8917a07:0x58f9adfe25449078!8m2!3d45.3787366!4d20.3935577!16s%2Fg%2F11s31yg6c2?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D" },
              { icon: Clock, label: "Radno vreme", val: "pon–sub 08:00–00:00 · ned 14:00–23:00" },
              { icon: Instagram, label: "Instagram", val: "@industrijagym", href: "https://instagram.com/industrijagym" },
            ].map((it, i) => (
              <a key={i} href={it.href} className="flex gap-4 border border-border p-5 bg-[var(--color-surface)] hover:border-primary transition-colors">
                <it.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{it.label}</div>
                  <div className="text-sm mt-1 font-semibold">{it.val}</div>
                </div>
              </a>
            ))}
            <div className="border border-primary p-5 flex items-center justify-between">
              <div>
                <div className="font-display text-xl">FITPASS</div>
                <div className="text-xs text-muted-foreground mt-1">Da — prihvatamo FITPASS karticu</div>
              </div>
              {/* [FITPASS LOGO] */}
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Partner</span>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 border border-border bg-[var(--color-surface)] p-8 space-y-5"
          >
            <h2 className="font-display text-3xl">Pošalji nam poruku</h2>
            <p className="text-sm text-muted-foreground">Popunite formu i odgovaraćemo u roku od 24h.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Ime i prezime" name="name" required />
              <Field label="Email" name="contact" required />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Tema</label>
              <select required name="topic" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none">
                <option>Članarina</option>
                <option>Personalni trening</option>
                <option>Grupni program</option>
                <option>FITPASS</option>
                <option>Ostalo</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Poruka</label>
              <textarea required name="message" rows={5} className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none resize-none" />
            </div>
            <button type="submit" className="btn-primary hover:btn-primary-hover w-full sm:w-auto">
              {sent ? "Poslato — hvala!" : "Pošalji"}
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-border">
        <iframe
          title="Mapa — Jevrejska 3A, Zrenjanin"
          src="https://www.google.com/maps?q=Jevrejska+3A,+Zrenjanin&output=embed"
          className="w-full h-[450px] grayscale contrast-125"
          loading="lazy"
        />
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none"
      />
    </div>
  );
}
