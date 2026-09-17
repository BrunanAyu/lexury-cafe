import { ArrowRight, Clock3, MessageCircle, Music2, Phone, Share2 } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1350px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="border border-gold/40 bg-walnut-dark p-7 shadow-[0_18px_60px_oklch(0.29_0.06_42/0.18)] md:p-9">
            <div className="flex items-start gap-4 border-b border-gold/30 pb-8">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.14em] text-highlight">
                  Opening Hours
                </h3>
                <dl className="mt-5 grid gap-3 text-sm text-highlight/70">
                  <div className="flex justify-between gap-8 border-b border-highlight/10 pb-3">
                    <dt>Monday - Friday</dt>
                    <dd className="text-right text-highlight">7:00 AM - 6:00 PM</dd>
                  </div>
                  <div className="flex justify-between gap-8">
                    <dt>Saturday - Sunday</dt>
                    <dd className="text-right text-highlight">8:00 AM - 1:00 PM</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="pt-8">
              <div className="mb-5 flex items-center gap-3">
                <Share2 className="h-4 w-4 text-gold" />
                <h3 className="font-sans text-xs uppercase tracking-[0.14em] text-highlight">
                  Contact Us
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-highlight/15 px-4 py-3 text-sm text-highlight/75 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 text-gold" /> Telegram
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-highlight/15 px-4 py-3 text-sm text-highlight/75 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <Share2 className="h-4 w-4 text-gold" /> Facebook
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-highlight/15 px-4 py-3 text-sm text-highlight/75 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <Music2 className="h-4 w-4 text-gold" /> TikTok
                </a>
                <div className="flex items-center gap-3 border border-highlight/15 px-4 py-3 text-sm text-highlight/75">
                  <Phone className="h-4 w-4 text-gold" /> Phone
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-walnut/30 bg-walnut-dark shadow-[0_18px_60px_oklch(0.29_0.06_42/0.14)] sm:min-h-[430px]">
            <iframe
              title={`Map showing ${siteConfig.location.city}, ${siteConfig.location.country}`}
              src={`${siteConfig.mapsUrl}`}
              className="h-full min-h-[360px] w-full grayscale-[0.15] contrast-[0.92] sm:min-h-[430px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
