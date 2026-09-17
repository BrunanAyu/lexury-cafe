import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import loungeImage from "@/assets/gallery-lounge.jpg";

export function ReservationSection() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="reservation" className="grid bg-charcoal text-highlight lg:grid-cols-2">
      <div className="relative min-h-[460px] lg:min-h-[760px]">
        <img
          src={loungeImage}
          loading="lazy"
          width={1056}
          height={1408}
          alt="Elegant lounge seating inside Luxury Cafe"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/25" />
      </div>
      <div className="flex items-center px-6 py-20 md:px-14">
        <div className="mx-auto w-full max-w-xl">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.28em] text-gold">Reservations</p>
          <h2 className="text-5xl leading-none sm:text-6xl">
            Let us prepare
            <br />
            <em>your experience.</em>
          </h2>
          <p className="mt-6 text-sm text-highlight/60">
            Reserve your table and let us prepare your experience.
          </p>
          <form className="mt-10 grid gap-5 sm:grid-cols-2" onSubmit={submit}>
            {[
              ["Name", "text"],
              ["Phone Number", "tel"],
              ["Number of Guests", "number"],
              ["Date", "date"],
              ["Time", "time"],
            ].map(([label, type]) => (
              <label
                key={label}
                className="text-[0.62rem] uppercase tracking-[0.14em] text-highlight/60"
              >
                {label}
                <input
                  required
                  type={type}
                  min={type === "number" ? 1 : undefined}
                  className="mt-2 h-12 w-full border-b border-highlight/25 bg-transparent text-sm text-highlight outline-none transition-colors focus:border-gold"
                />
              </label>
            ))}
            <label className="text-[0.62rem] uppercase tracking-[0.14em] text-highlight/60 sm:col-span-2">
              Special Request
              <textarea
                rows={3}
                className="mt-2 w-full resize-none border-b border-highlight/25 bg-transparent py-3 text-sm text-highlight outline-none transition-colors focus:border-gold"
              />
            </label>
            <div className="sm:col-span-2">
              <Button type="submit" variant="luxury" size="luxury">
                Request Reservation <ArrowRight />
              </Button>
              {sent && (
                <p role="status" className="mt-4 text-sm text-gold">
                  Thank you. Your reservation request is ready for confirmation.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
