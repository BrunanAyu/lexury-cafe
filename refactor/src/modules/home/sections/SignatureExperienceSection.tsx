import { Coffee, UtensilsCrossed, Wheat } from "lucide-react";

export function SignatureExperienceSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1350px] px-6 md:px-10">
        <div className="text-center">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.28em] text-walnut">
            More than a meal
          </p>
          <h2 className="text-5xl sm:text-6xl">The Signature Experience</h2>
        </div>
        <div className="mt-14 grid border-y border-border md:grid-cols-3">
          {[
            [
              Coffee,
              "Exceptional Coffee",
              "From carefully selected beans to the final pour, every cup is made with patience.",
            ],
            [
              UtensilsCrossed,
              "Refined Dining",
              "Familiar Ethiopian flavors and global favorites presented with modern elegance.",
            ],
            [
              Wheat,
              "Custom Cakes",
              "One-of-a-kind cakes designed to make every celebration feel truly personal.",
            ],
          ].map(([Icon, title, copy], i) => {
            const I = Icon as typeof Coffee;
            return (
              <article
                key={String(title)}
                className={`group px-8 py-12 ${i < 2 ? "md:border-r md:border-border" : ""}`}
              >
                <I className="mb-8 h-7 w-7 text-gold" strokeWidth={1.3} />
                <span className="font-display text-sm text-walnut">0{i + 1}</span>
                <h3 className="mt-4 text-3xl">{String(title)}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{String(copy)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
