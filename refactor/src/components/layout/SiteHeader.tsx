import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollToSection";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site.config";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "border-b border-border bg-background/95 text-foreground backdrop-blur-xl" : "text-highlight"}`}
      >
        <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 lg:h-24 lg:grid-cols-[auto_1fr_auto] lg:px-10">
          <button
            aria-label="Go to homepage"
            onClick={() => navigate("home")}
            className="min-w-0 cursor-pointer text-left"
          >
            <span className="block font-display text-2xl leading-none">{siteConfig.name}</span>
            <span className="mt-1 block text-[0.52rem] tracking-[0.24em]">
              {siteConfig.tagline}
            </span>
          </button>
          <nav aria-label="Main navigation" className="hidden justify-center gap-7 lg:flex">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className="cursor-pointer text-[0.67rem] uppercase tracking-[0.11em] transition-colors hover:text-gold"
              >
                {label}
              </button>
            ))}
          </nav>
          <Button
            variant="luxuryOutline"
            size="luxury"
            onClick={() => navigate("reservation")}
            className="hidden lg:inline-flex"
          >
            Reserve a Table
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="justify-self-end lg:hidden"
          >
            <Menu />
          </Button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal text-highlight lg:hidden">
          <div className="flex h-20 items-center justify-between px-5">
            <span className="font-display text-2xl">{siteConfig.name}</span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X />
            </Button>
          </div>
          <nav className="flex h-[calc(100%-5rem)] flex-col justify-center px-8">
            {navItems.map(([label, id], i) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className="border-b border-highlight/15 py-4 text-left font-display text-3xl"
              >
                {String(i + 1).padStart(2, "0")} <span className="ml-5">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
