import type { GalleryImage } from "./gallery.data";

type GalleryGridProps = {
  images: GalleryImage[];
  onSelect: (index: number) => void;
};

export function GalleryGrid({ images, onSelect }: GalleryGridProps) {
  return (
    <div className="grid gap-4 md:h-[620px] md:grid-cols-2 md:grid-rows-2 lg:h-[700px]">
      {images.map((image, index) => (
        <button
          key={image.alt}
          type="button"
          onClick={() => onSelect(index)}
          className="group relative min-h-[240px] cursor-zoom-in overflow-hidden md:min-h-0"
          aria-label={`View ${image.alt}`}
        >
          <img
            src={image.src}
            loading="lazy"
            width={1408}
            height={1056}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/20" />
        </button>
      ))}
    </div>
  );
}