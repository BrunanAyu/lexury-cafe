import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GalleryImage } from "./gallery.data";

type GalleryLightboxProps = {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onChange,
}: GalleryLightboxProps) {
  const activeImage = images[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onChange((activeIndex - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") onChange((activeIndex + 1) % images.length);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length, onChange, onClose]);

  if (!activeImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-5"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-5 top-5 text-highlight"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-3 text-highlight md:left-8"
        onClick={() => onChange((activeIndex - 1 + images.length) % images.length)}
        aria-label="Previous image"
      >
        <ChevronLeft />
      </Button>
      <img
        src={activeImage.src}
        alt={activeImage.alt}
        className="max-h-[86vh] max-w-[84vw] object-contain"
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-3 text-highlight md:right-8"
        onClick={() => onChange((activeIndex + 1) % images.length)}
        aria-label="Next image"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}