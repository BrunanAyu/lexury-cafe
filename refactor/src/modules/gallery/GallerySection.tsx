import { useState } from "react";
import { GalleryGrid } from "./GalleryGrid";
import { galleryImages } from "./gallery.data";
import { GalleryLightbox } from "./GalleryLightbox";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.28em] text-walnut">
              Inside Luxury
            </p>
            <h2 className="text-5xl sm:text-6xl">
              Every detail sets
              <br />
              the <em>mood.</em>
            </h2>
          </div>
          <GalleryGrid images={galleryImages} onSelect={setActiveIndex} />
        </div>
      </section>

      {activeIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </>
  );
}
