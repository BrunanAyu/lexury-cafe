import { scrollToSection } from "@/lib/scrollToSection";
import { siteConfig } from "@/config/site.config";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal px-6 py-16 text-highlight md:px-10">
      <div className="mx-auto max-w-[1350px]">
        <div className="grid gap-12 border-b border-highlight/15 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl">{siteConfig.name}</p>
            <p className="mt-1 text-[0.58rem] tracking-[0.24em] text-gold">{siteConfig.tagline}</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-highlight/50">
              Coffee, cuisine, celebrations, and beautiful moments in the heart of Woldia.
            </p>
          </div>
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-gold">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-highlight/60">
              <button onClick={() => scrollToSection("story")} className="w-fit cursor-pointer">
                Our Story
              </button>
              <button onClick={() => scrollToSection("menu")} className="w-fit cursor-pointer">
                Menu
              </button>
              <button onClick={() => scrollToSection("gallery")} className="w-fit cursor-pointer">
                Gallery
              </button>
            </div>
          </div>
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-gold">Visit</p>
            <p className="mt-5 text-sm leading-7 text-highlight/60">
              {siteConfig.location.city}, {siteConfig.location.country}
              <br />
              Reservations available daily
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-[0.58rem] uppercase tracking-[0.14em] text-highlight/35 sm:flex-row sm:justify-between">
          <span>© 2026 {siteConfig.fullName}</span>
          <span>Made with care in {siteConfig.location.city}</span>
        </div>
      </div>
    </footer>
  );
}
