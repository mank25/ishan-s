// Shown whenever the Sanity Studio doesn't yet have content of a given type,
// so the site never renders empty/broken sections before the client fills it in.

export const fallbackServices = [
  {
    _id: "fallback-weddings",
    title: "Weddings",
    description:
      "End-to-end wedding production - venue, décor, catering, and every ceremony in between - planned around your families, not a template.",
    icon: "W",
  },
  {
    _id: "fallback-corporate",
    title: "Corporate Events",
    description:
      "Product launches, conferences, and milestone galas run with the same precision our clients expect in the boardroom.",
    icon: "C",
  },
  {
    _id: "fallback-catering",
    title: "Catering & Décor",
    description:
      "The original craft the family built its name on in 1973 - menus and dressing tailored to the occasion, not off a set list.",
    icon: "K",
  },
  {
    _id: "fallback-socials",
    title: "Birthdays & Socials",
    description:
      "Anniversaries, receptions, and reunions - smaller in scale, never smaller in care.",
    icon: "B",
  },
];

export const fallbackTestimonials = [
  {
    _id: "fallback-1",
    clientName: "Ritika & Aman",
    eventType: "Wedding · Chandigarh",
    quote:
      "They planned our wedding the way you'd plan for family - nothing was ever 'not their problem.' Three generations of our family have now used Eventiify.",
    rating: 5,
  },
  {
    _id: "fallback-2",
    clientName: "Naveen Kapoor",
    eventType: "Corporate Gala · Delhi NCR",
    quote:
      "We've run our annual leadership summit with them for four years running. Same care as a wedding, just in a blazer.",
    rating: 5,
  },
  {
    _id: "fallback-3",
    clientName: "The Malhotra Family",
    eventType: "60th Anniversary · Mohali",
    quote:
      "My parents were married in a hall Eventiify's founders catered in 1979. Watching them do our anniversary was full circle.",
    rating: 5,
  },
];

export const fallbackGallery = [
  { _id: "fallback-g1", title: "Mandap dressing, Chandigarh", category: "weddings" },
  { _id: "fallback-g2", title: "Leadership summit stage", category: "corporate" },
  { _id: "fallback-g3", title: "Ceremonial thali service", category: "catering" },
  { _id: "fallback-g4", title: "60th anniversary reception", category: "socials" },
  { _id: "fallback-g5", title: "Sangeet floral archway", category: "weddings" },
  { _id: "fallback-g6", title: "Product launch centerpiece", category: "corporate" },
];

export const legacyMilestones = [
  {
    year: "1973",
    title: "Chache Di Hatti opens",
    body: "A single counter selling home-style catering for weddings and family functions in the neighborhood.",
  },
  {
    year: "1991",
    title: "First full wedding contract",
    body: "Catering grows into full-day coordination - décor, seating, and service under one roof.",
  },
  {
    year: "2008",
    title: "Corporate division launches",
    body: "Conferences and product launches join the calendar alongside weddings and family events.",
  },
  {
    year: "2024",
    title: "Eventiify is born",
    body: "The family's five decades of ledgers become a dedicated event planning house, serving three cities.",
  },
];
