import { createClient } from "@sanity/client";
import { config } from "dotenv";

config({ path: ".env" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID / DATASET / SANITY_API_TOKEN in .env");
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const services = [
  {
    _id: "seed-service-weddings",
    _type: "service",
    title: "Weddings",
    description:
      "End-to-end wedding production — venue, décor, catering, and every ceremony in between — planned around your families, not a template.",
    icon: "W",
    order: 1,
  },
  {
    _id: "seed-service-corporate",
    _type: "service",
    title: "Corporate Events",
    description:
      "Product launches, conferences, and milestone galas run with the same precision our clients expect in the boardroom.",
    icon: "C",
    order: 2,
  },
  {
    _id: "seed-service-catering",
    _type: "service",
    title: "Catering & Décor",
    description:
      "The original craft the family built its name on in 1973 — menus and dressing tailored to the occasion, not off a set list.",
    icon: "K",
    order: 3,
  },
  {
    _id: "seed-service-socials",
    _type: "service",
    title: "Birthdays & Socials",
    description: "Anniversaries, receptions, and reunions — smaller in scale, never smaller in care.",
    icon: "B",
    order: 4,
  },
];

const testimonials = [
  {
    _id: "seed-testimonial-1",
    _type: "testimonial",
    clientName: "Ritika & Aman",
    eventType: "Wedding · Chandigarh",
    quote:
      "They planned our wedding the way you'd plan for family — nothing was ever 'not their problem.' Three generations of our family have now used Eventiify.",
    rating: 5,
    featured: true,
  },
  {
    _id: "seed-testimonial-2",
    _type: "testimonial",
    clientName: "Naveen Kapoor",
    eventType: "Corporate Gala · Delhi NCR",
    quote:
      "We've run our annual leadership summit with them for four years running. Same care as a wedding, just in a blazer.",
    rating: 5,
    featured: true,
  },
  {
    _id: "seed-testimonial-3",
    _type: "testimonial",
    clientName: "The Malhotra Family",
    eventType: "60th Anniversary · Mohali",
    quote:
      "My parents were married in a hall Eventiify's founders catered in 1979. Watching them do our anniversary was full circle.",
    rating: 5,
    featured: false,
  },
];

const posts = [
  {
    _id: "seed-post-1",
    _type: "post",
    title: "Planning a Monsoon Wedding in Chandigarh",
    slug: { _type: "slug", current: "planning-a-monsoon-wedding-in-chandigarh" },
    excerpt: "What to build into your season plan when the weather won't cooperate.",
    category: "tips",
    author: "Team Eventiify",
    publishedAt: new Date("2026-06-01").toISOString(),
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Monsoon weddings need a covered ceremony plan, a backup mandap layout, and vendors who've done it before.",
          },
        ],
      },
    ],
  },
  {
    _id: "seed-post-2",
    _type: "post",
    title: "Inside a Leadership Summit Build",
    slug: { _type: "slug", current: "inside-a-leadership-summit-build" },
    excerpt: "A behind-the-scenes look at staging a four-day corporate gala.",
    category: "corporate",
    author: "Team Eventiify",
    publishedAt: new Date("2026-05-10").toISOString(),
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "From stage rigging to catering logistics, here's how the team runs a multi-day summit without a hitch.",
          },
        ],
      },
    ],
  },
  {
    _id: "seed-post-3",
    _type: "post",
    title: "From a Kitchen Counter to a Full Event House",
    slug: { _type: "slug", current: "from-a-kitchen-counter-to-a-full-event-house" },
    excerpt: "The story of Chache Di Hatti, and how it became Eventiify.",
    category: "story",
    author: "Team Eventiify",
    publishedAt: new Date("2026-04-15").toISOString(),
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Five decades of ledgers, one family, and a lot of weddings — here's how it started.",
          },
        ],
      },
    ],
  },
];

const siteSettings = {
  _id: "seed-siteSettings",
  _type: "siteSettings",
  phone: "+91 12345 67890",
  email: "hello@eventiify.com",
  address: "Chandigarh · Delhi NCR · Mohali",
  instagram: "https://instagram.com/eventiify",
  facebook: "https://facebook.com/eventiify",
};

async function seed() {
  const docs = [...services, ...testimonials, ...posts, siteSettings];
  const tx = client.transaction();
  for (const doc of docs) {
    tx.createOrReplace(doc);
  }
  const result = await tx.commit();
  console.log(`Seeded ${docs.length} documents.`);
  console.log(result);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
