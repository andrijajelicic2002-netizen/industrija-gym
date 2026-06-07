import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-display">Stranica nije pronađena</h2>
        <p className="mt-2 text-sm text-muted-foreground">Stranica koju tražite ne postoji ili je premeštena.</p>
        <div className="mt-6">
          <Link to="/" className="btn-primary hover:btn-primary-hover">Nazad na početnu</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display">Greška pri učitavanju</h1>
        <p className="mt-2 text-sm text-muted-foreground">Pokušajte ponovo ili se vratite na početnu.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary hover:btn-primary-hover">Pokušaj ponovo</button>
          <a href="/" className="btn-outline hover:bg-foreground hover:text-background">Početna</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Industrija Gym | Teretana u centru Zrenjanina — Snaga & Fitnes" },
      { name: "description", content: "Moderna teretana u srcu Zrenjanina, Jevrejska 3A. Treninzi snage, grupni programi i personalni treninzi. Prihvatamo FITPASS. Radi svaki dan." },
      { property: "og:title", content: "Industrija Gym | Teretana u centru Zrenjanina — Snaga & Fitnes" },
      { property: "og:description", content: "Moderna teretana u srcu Zrenjanina, Jevrejska 3A. Treninzi snage, grupni programi i personalni treninzi. Prihvatamo FITPASS. Radi svaki dan." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Industrija Gym" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Industrija Gym | Teretana u centru Zrenjanina — Snaga & Fitnes" },
      { name: "twitter:description", content: "Moderna teretana u srcu Zrenjanina, Jevrejska 3A. Treninzi snage, grupni programi i personalni treninzi. Prihvatamo FITPASS. Radi svaki dan." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@500;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}