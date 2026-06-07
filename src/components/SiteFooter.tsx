import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-border mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-widest mb-3">
            ИНДУСТРИЈА<span className="text-primary">.</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Svaki trening računa. Bilo da tek počinješ ili već godinama guriš tegove,
            Industrija Gym je mesto gde napredak postaje navika. Piši nam slobodno — odgovaramo brzo.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="btn-primary hover:btn-primary-hover">Postani član</Link>
            <Link to="/contact" className="btn-outline hover:bg-foreground hover:text-background">Kontaktiraj nas</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.2em] mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" /> industrijagym@gmail.com</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Jevrejska 3A, Zrenjanin</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" /> pon–sub 08:00–00:00<br />ned 14:00–23:00</li>
            <li className="flex gap-2"><Instagram className="h-4 w-4 text-primary shrink-0 mt-0.5" /> <a href="https://instagram.com/industrijagym" className="hover:text-primary">@industrijagym</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.2em] mb-4">Navigacija</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Početna</Link></li>
            <li><Link to="/about" className="hover:text-primary">O nama</Link></li>
            <li><Link to="/programs" className="hover:text-primary">Programi & Cenovnik</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Galerija</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Kontakt</Link></li>
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 border border-primary text-primary px-3 py-1.5 text-xs font-bold tracking-widest uppercase">
            {/* [FITPASS LOGO] — placeholder */}
            FITPASS prihvaćen
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Industrija Gym. Sva prava zadržana.</span>
          <span>Home of Strength and Fitness · Zrenjanin</span>
        </div>
      </div>
    </footer>
  );
}
