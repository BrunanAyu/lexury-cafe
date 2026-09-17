import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollToSection";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-botanical px-6 py-28 text-center text-highlight">
      <div className="absolute inset-x-[8%] top-0 h-px bg-gold/50" />
      <p className="mb-5 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
        An evening to remember
      </p>
      <h2 className="text-6xl sm:text-7xl">Your Table Is Waiting.</h2>
      <Button
        variant="luxuryOutline"
        size="luxury"
        className="mt-9"
        onClick={() => scrollToSection("reservation")}
      >
        Reserve Your Experience <CalendarDays />
      </Button>
    </section>
  );
}
