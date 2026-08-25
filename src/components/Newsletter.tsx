"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * The site is a static export, so there is no server to post to. Rather than
 * swallow an address and pretend, the form hands the visitor off to their mail
 * client with everything pre-filled. Swap this for a provider endpoint when one
 * exists.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Add me to the Eventiify list");
    const body = encodeURIComponent(
      `Please add ${email} to the Eventiify planning-notes list.`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="newsletter" className="bg-sand px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="script text-[clamp(2rem,4.4vw,3rem)] text-brass">Get on the list</p>
          <h2 className="headline mt-1 max-w-md text-[clamp(1.3rem,2.6vw,1.9rem)] text-ink">
            Stay in the know about new offerings and planning notes
          </h2>
        </div>

        {sent ? (
          <p className="max-w-sm text-[0.9rem] leading-[1.8] text-charcoal/75">
            Your mail app should be opening with the message ready — hit send and
            you&rsquo;re on the list.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-full border border-hairline bg-parchment px-6 py-3.5 text-[0.9rem] text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn btn-gold shrink-0">
              Sign up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
