import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Parisienne } from "next/font/google";
import AnnounceBar from "@/components/AnnounceBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Geometric sans for headlines and copy, a Didone-ish serif to echo the seal's
// wordmark, and a formal script for the gold accents above each section.
const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the deployed origin so share cards resolve.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventiify.example.com"),
  title: "Eventiify — We Listen, We Plan, We Deliver",
  description:
    "Eventiify is a full-service event house from the family behind Chache Di Hatti — crafting weddings, corporate gatherings and celebrations across Chandigarh and Delhi NCR since 1973.",
  openGraph: {
    title: "Eventiify — Crafting Unforgettable Celebrations",
    description:
      "Wedding planning, catering and event production across Chandigarh, Mohali, Panchkula and Delhi NCR. A unit of Chache Di Hatti, since 1973.",
    images: ["/brand/og.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} ${parisienne.variable} antialiased`}
    >
      <body>
        <div className="shell">
          {/* The nav overlays the hero, so it needs a positioning parent no
              taller than the announcement bar above it. */}
          <div className="relative z-40">
            <AnnounceBar />
            <Header />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
