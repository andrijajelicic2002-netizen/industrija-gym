import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-4xl md:text-6xl font-display">{title}</h2>
      {description && <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{description}</p>}
    </div>
  );
}
