import { useState } from "react";
import { ArrowRight, Utensils } from "lucide-react";
import { menuCategories, menuItems, type MenuCategory } from "./menu.data";

type MenuFilter = "All" | MenuCategory;

function MenuCard({ item }: { item: (typeof menuItems)[number] }) {
  return (
    <article className="group overflow-hidden border border-walnut/20 bg-highlight text-foreground shadow-[0_12px_35px_oklch(0.29_0.06_42/0.07)] transition-transform duration-500 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-walnut-dark">
        <img
          src={item.image}
          loading="lazy"
          width={1056}
          height={792}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {item.featured && (
          <span className="absolute left-4 top-4 bg-gold px-3 py-2 text-[0.58rem] uppercase tracking-[0.16em] text-charcoal">
            Signature
          </span>
        )}
      </div>
      <div className="flex min-h-[188px] flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl leading-none sm:text-3xl">{item.name}</h3>
          <span className="shrink-0 pt-1 text-sm text-walnut">{item.price}</span>
        </div>
        <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">{item.description}</p>
        <div className="mt-auto flex items-center gap-2 pt-5 text-[0.58rem] uppercase tracking-[0.18em] text-walnut">
          <span className="h-px w-7 bg-gold transition-all duration-500 group-hover:w-12" />
          {item.category}
        </div>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuFilter>("All");
  const visibleItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid justify-items-center gap-8 border-b border-walnut/25 pb-12 text-center md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.28em] text-walnut">
              A taste of Luxury
            </p>
            <h2 className="max-w-2xl text-5xl leading-[0.92] sm:text-6xl md:text-7xl">
              Crafted for slow,
              <br />
              <em>beautiful moments.</em>
            </h2>
          </div>
         
        </div>

        <div className="flex gap-2 overflow-x-auto px-1 py-8 [scrollbar-width:none] [scroll-behavior:smooth] [&::-webkit-scrollbar]:hidden">
          {menuCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`shrink-0 whitespace-nowrap border px-4 py-3 text-[0.62rem] uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut ${isActive ? "border-walnut bg-walnut text-highlight" : "border-walnut/25 text-walnut hover:border-walnut hover:bg-walnut/5"}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-walnut/25 pt-6 text-center text-sm text-muted-foreground sm:flex-row sm:justify-center">
          <p>Prices are listed in Ethiopian birr. Please ask our team about today&apos;s specials.</p>
          <a
            href="#menus"
            className="inline-flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.18em] text-walnut transition-colors hover:text-gold"
          >
            Watch full menu <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
