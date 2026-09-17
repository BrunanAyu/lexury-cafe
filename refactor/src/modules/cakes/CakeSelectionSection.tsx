import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollToSection";
import cakeImage from "@/assets/cake-celebration.jpg";

const occasions = ["Birthday", "Wedding", "Graduation", "Special Celebrations"];

export function CakeSelectionSection() {
  const [occasion, setOccasion] = useState("Birthday");

  return (
    <section id="cakes" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-[1350px] gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="relative min-h-[520px] overflow-hidden">
          <img
            src={cakeImage}
            loading="lazy"
            width={1408}
            height={1056}
            alt="Custom ivory celebration cake with gold botanical detail"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
          <div className="absolute bottom-0 left-0 bg-charcoal px-7 py-5 text-highlight">
            <span className="text-[0.6rem] uppercase tracking-[0.24em]">Designed for your</span>
            <strong className="block font-display text-3xl text-gold">{occasion}</strong>
          </div>
        </div>
        <div className="self-center">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.28em] text-walnut">
            Made for your moment
          </p>
          <h2 className="text-5xl leading-none sm:text-6xl">
            Your celebration,
            <br />
            <em>beautifully made.</em>
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground">
            Choose your occasion and begin a custom cake conversation with our pastry team.
          </p>
          <div className="mt-10 border-t border-border">
            {occasions.map((name, i) => (
              <button
                key={name}
                onClick={() => setOccasion(name)}
                className={`grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-border py-5 text-left transition-colors ${occasion === name ? "text-walnut" : "text-foreground hover:text-walnut"}`}
              >
                <span className="text-[0.65rem] text-muted-foreground">0{i + 1}</span>
                <span className="font-display text-2xl">{name}</span>
                <ArrowRight
                  className={`h-4 w-4 transition-transform ${occasion === name ? "translate-x-1 text-gold" : ""}`}
                />
              </button>
            ))}
          </div>
          <Button
            variant="luxury"
            size="luxury"
            className="mt-8"
            onClick={() => scrollToSection("reservation")}
          >
            Begin Your Order <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
