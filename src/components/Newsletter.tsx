"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
  }

  return (
    <section className="bg-parchment-deep py-16 text-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Get on the guest list.</h2>
          <p className="mt-2 max-w-md font-body text-sm text-charcoal/75">
            Season planning tips and real weddings from the journal - no more than twice a month.
          </p>
        </div>

        {status === "idle" ? (
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-hairline bg-parchment px-5 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/50 focus:border-ink focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-ink px-6 py-3 font-utility text-xs uppercase tracking-[0.18em] text-parchment transition-colors hover:bg-ink-deep"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <p className="font-display italic text-lg text-ink">You&rsquo;re on the list - welcome.</p>
        )}
      </div>
    </section>
  );
}
