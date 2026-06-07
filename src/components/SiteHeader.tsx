import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Početna" },
  { to: "/about", label: "O nama" },
  { to: "/programs", label: "Programi" },
  { to: "/programs", label: "Cenovnik", hash: "cenovnik" },
  { to: "/gallery", label: "Galerija" },
  { to: "/contact", label: "Kontakt" },
];

export function SiteHeader({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = transparentOnTop ? window.innerHeight * 0.85 : 20;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  const isFloating = transparentOnTop && !scrolled;
  const headerCls = isFloating
    ? "absolute top-0 left-0 right-0 z-50 bg-transparent"
    : "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border header-sticky";

  return (
    <>
      <header className={headerCls}>
        <div className="container-x flex items-center justify-between h-20">
          <Link to="/" className="font-display text-2xl tracking-widest text-foreground">
            ИНДУСТРИЈА<span className="text-primary">.</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n, i) => (
              <Link
                key={i}
                to={n.to}
                hash={n.hash}
                className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="hidden lg:inline-flex btn-primary hover:btn-primary-hover">
            Postani član
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="lg:hidden text-foreground p-2"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col">
          <div className="container-x flex items-center justify-between h-20">
            <span className="font-display text-2xl tracking-widest">
              ИНДУСТРИЈА<span className="text-primary">.</span>
            </span>
            <button aria-label="Close" onClick={() => setOpen(false)} className="p-2">
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-6">
            {nav.map((n, i) => (
              <Link
                key={i}
                to={n.to}
                hash={n.hash}
                onClick={() => setOpen(false)}
                className="font-display text-4xl uppercase tracking-wider hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 hover:btn-primary-hover">
              Postani član
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
