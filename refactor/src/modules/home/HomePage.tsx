import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StorySection } from "@/modules/about";
import { MenuSection } from "@/modules/menu";
import { CakeSelectionSection } from "@/modules/cakes";
import { GallerySection } from "@/modules/gallery";
// import { ReservationSection } from "@/modules/reservations";
import { ContactSection } from "@/modules/contact";
import { HeroSection } from "./sections/HeroSection";
import { SignatureExperienceSection } from "./sections/SignatureExperienceSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";

export function HomePage() {
  return (
    <main id="home" className="bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <StorySection />
      <MenuSection />
      <SignatureExperienceSection />
      <CakeSelectionSection />
      <GallerySection />
      {/* <ReservationSection /> */}
      <ContactSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
