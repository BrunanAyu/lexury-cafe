import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollToSection";
import heroImage from "@/assets/luxury-cafe-heros.jpg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden text-highlight">
      <img
        src={heroImage}
        width={1920}
        height={1280}
        alt="Luxury Cafe and Restaurant interior with marble, walnut, and botanical walls"
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/45 to-charcoal/15" />
      <div className="light-sweep absolute inset-y-0 -left-1/3 w-2/3 rotate-12 bg-gradient-to-r from-transparent via-highlight/35 to-transparent blur-3xl" />
      <div className="dust-float absolute left-[58%] top-[28%] h-1 w-1 rounded-full bg-gold shadow-[80px_100px_0_var(--gold),-140px_180px_0_var(--highlight),110px_320px_0_var(--gold),-60px_430px_0_var(--highlight)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-24 pt-40 md:px-12 md:pb-28">
        <div className="flex max-w-4xl gap-6 md:gap-10">
          <div className="gold-rule w-px shrink-0 bg-gold" />
          <div>
            <p className="reveal-up mb-5 text-[0.65rem] uppercase tracking-[0.32em] text-gold [animation-delay:.25s]">
              Welcome to Woldia
            </p>
            <h1 className="font-display text-6xl font-medium leading-[0.88] sm:text-7xl md:text-8xl lg:text-[7.4rem]">
              <span className="reveal-up block [animation-delay:.42s]">Where Every Moment</span>
              <span className="reveal-up block italic text-ivory [animation-delay:.58s]">
                Feels Like Luxury.
              </span>
            </h1>
            <p className="reveal-up mt-7 max-w-xl text-sm leading-7 text-highlight/75 md:text-base [animation-delay:.78s]">
              Experience exceptional coffee, delicious cuisine, handcrafted desserts, and
              unforgettable moments in an elegant atmosphere at the heart of Woldia.
            </p>
            <div className="reveal-up mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:.95s]">
              <Button variant="luxury" size="luxury" onClick={() => scrollToSection("menu")}>
                Explore Our Menu <ArrowRight />
              </Button>
              <Button
                variant="luxuryOutline"
                size="luxury"
                onClick={() => scrollToSection("reservation")}
              >
                Reserve a Table
              </Button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection("story")}
        aria-label="Scroll to our story"
        className="absolute bottom-8 right-6 z-10 flex cursor-pointer items-center gap-3 text-[0.58rem] uppercase tracking-[0.24em] md:right-12"
      >
        <span>Discover</span>
        <span className="relative h-12 w-px overflow-hidden bg-highlight/30">
          <span className="scroll-line absolute inset-x-0 top-0 h-full bg-gold" />
        </span>
      </button>
    </section>
  );
}
