import type { Metadata } from "next";
import Seal from "@/components/Seal";

export const metadata: Metadata = {
  title: "Contact - Eventiify",
  description: "Tell Eventiify about your event and the team will get back within a day.",
};

const EVENT_TYPES = ["Wedding", "Corporate Event", "Catering Only", "Birthday / Social", "Other"];

export default function ContactPage() {
  return (
    <main className="bg-parchment">
      <section className="border-b border-hairline bg-ink py-20 text-parchment">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <p className="font-utility text-xs uppercase tracking-[0.3em] text-gold">
              Start Planning
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
              Tell us the date. We&rsquo;ll do the rest.
            </h1>
            <p className="mt-4 max-w-lg font-body text-parchment/70">
              Share a few details and someone from the team will call within 24 hours - no
              call centre, just the people who&rsquo;ll actually plan your event.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:px-10">
            <div>
              <Seal className="h-24 w-24 text-rust" spin={false} />
              <dl className="mt-8 space-y-6 font-body text-sm">
                <div>
                  <dt className="font-utility text-[11px] uppercase tracking-[0.16em] text-rust">
                    Call or WhatsApp
                  </dt>
                  <dd className="mt-1 text-ink">
                    <a href="tel:+911234567890" className="hover:text-rust">
                      +91 12345 67890
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-utility text-[11px] uppercase tracking-[0.16em] text-rust">
                    Email
                  </dt>
                  <dd className="mt-1 text-ink">
                    <a href="mailto:hello@eventiify.com" className="hover:text-rust">
                      hello@eventiify.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-utility text-[11px] uppercase tracking-[0.16em] text-rust">
                    Studio
                  </dt>
                  <dd className="mt-1 text-ink">Chandigarh · Delhi NCR · Mohali</dd>
                </div>
              </dl>
            </div>

            <form
              action="mailto:hello@eventiify.com"
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-utility text-[11px] uppercase tracking-[0.16em] text-charcoal/60">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-hairline bg-white px-4 py-3 font-body text-sm text-charcoal focus:border-ink focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="font-utility text-[11px] uppercase tracking-[0.16em] text-charcoal/60">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-2 w-full rounded-lg border border-hairline bg-white px-4 py-3 font-body text-sm text-charcoal focus:border-ink focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="font-utility text-[11px] uppercase tracking-[0.16em] text-charcoal/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-hairline bg-white px-4 py-3 font-body text-sm text-charcoal focus:border-ink focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="font-utility text-[11px] uppercase tracking-[0.16em] text-charcoal/60">
                  Event type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  defaultValue=""
                  required
                  className="mt-2 w-full rounded-lg border border-hairline bg-white px-4 py-3 font-body text-sm text-charcoal focus:border-ink focus:outline-none"
                >
                  <option value="" disabled>
                    Select an event type
                  </option>
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="details" className="font-utility text-[11px] uppercase tracking-[0.16em] text-charcoal/60">
                  Tell us about the event
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  placeholder="Date, guest count, city, anything else that helps us plan."
                  className="mt-2 w-full rounded-lg border border-hairline bg-white px-4 py-3 font-body text-sm text-charcoal focus:border-ink focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-ink px-8 py-3.5 font-utility text-xs uppercase tracking-[0.18em] text-parchment transition-colors hover:bg-ink-deep"
              >
                Send Enquiry
              </button>
            </form>
          </div>
      </section>
    </main>
  );
}
