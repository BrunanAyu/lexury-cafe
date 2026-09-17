import { siteConfig } from "@/config/site.config";
import experienceImage from "@/assets/cafe-interior.jpg";

export function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute right-[8%] top-0 h-full w-3 bg-walnut" />
      <div className="mx-auto grid max-w-[1350px] items-center gap-14 px-6 md:grid-cols-[.8fr_1.2fr] md:px-10">
        <div className="relative z-10">
          <p className="mb-5 text-[0.65rem] uppercase tracking-[0.28em] text-walnut">
            The Luxury Experience
          </p>
          <h2 className="text-5xl leading-[.95] sm:text-6xl lg:text-7xl">
            An atmosphere
            <br />
            made to be <em>felt.</em>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-muted-foreground">
            Marble, walnut, warm light, and generous hospitality come together in a place designed
            for everything from quiet coffee to milestone celebrations.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-7">
            <div>
              <strong className="font-display text-3xl text-walnut">01</strong>
              <p className="mt-2 text-xs uppercase tracking-[0.14em]">In the heart of Woldia</p>
            </div>
            <div>
              <strong className="font-display text-3xl text-walnut">02</strong>
              <p className="mt-2 text-xs uppercase tracking-[0.14em]">Crafted with intention</p>
            </div>
          </div>
        </div>
        <div className="relative pr-6 md:pr-14">
          <img
            src={experienceImage}
            loading="lazy"
            width={1408}
            height={1056}
            alt="An intimate dining table beside walnut and botanical walls"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute -bottom-7 -left-5 bg-botanical px-6 py-5 text-highlight">
            <span className="font-display text-3xl">{siteConfig.location.city}</span>
            <span className="ml-3 text-[0.6rem] uppercase tracking-[0.2em] text-gold">
              {siteConfig.location.country}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
