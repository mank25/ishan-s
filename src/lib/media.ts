/**
 * Every photograph on the marketing site lives here.
 *
 * These are free Unsplash placeholders standing in for Eventiify's own work.
 * To swap one for a real photo, either drop the file into `public/photos/` and
 * change the entry to `"/photos/your-file.jpg"`, or paste any other image URL —
 * nothing else in the codebase needs to change.
 */

type Photo = { src: string; alt: string };

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

/* Hero — the wide establishing shot behind the headline. */
export const heroPhoto: Photo = {
  src: unsplash("1772127822552-ce9ef537bdcf", 2000, 1250),
  alt: "A flower-covered mandap at the head of a white aisle, set for an outdoor ceremony",
};

/* About — four mounted photographs scattered around the section copy. */
export const aboutPhotos: Photo[] = [
  {
    src: unsplash("1722952934708-749c22eb2e58", 640, 860),
    alt: "A couple in wedding dress framed by strings of warm fairy lights",
  },
  {
    src: unsplash("1610173827043-9db50e0d8ef9", 640, 860),
    alt: "A bride in a red lehenga and layered gold jewellery",
  },
  {
    src: unsplash("1744804298612-fa9f2ef0e125", 640, 860),
    alt: "A couple posing with a guest in front of a floral backdrop",
  },
  {
    src: unsplash("1766763845156-f40e4250a377", 640, 860),
    alt: "A groom in a cream sherwani wearing layered flower garlands",
  },
];

/* The staggered mosaic band that bridges the About and Services sections. */
export const bandPhotos: Photo[] = [
  { src: unsplash("1681717166573-f71589207785", 520, 700), alt: "A haldi ceremony, turmeric across the bride's face and shoulders" },
  { src: unsplash("1587271407850-8d438ca9fdf2", 520, 700), alt: "A gilded wedding stage dressed with drapery and flowers" },
  { src: unsplash("1621801306185-8c0ccf9c8eb8", 520, 700), alt: "Two henna-covered hands holding one another" },
  { src: unsplash("1728910156510-77488f19b152", 520, 700), alt: "Copper serving pots laid out across a catering table" },
  { src: unsplash("1774024333437-c36a03b83c48", 520, 700), alt: "Guests in red gathered around the couple during a ritual" },
  { src: unsplash("1764176269321-6d14f4af09c7", 520, 700), alt: "Singers in matching red and gold outfits performing at a function" },
  { src: unsplash("1735052712464-9d24b69be5f5", 520, 700), alt: "A couple in red walking a wooded path after the ceremony" },
  { src: unsplash("1761472606347-bfebc5a3e546", 520, 700), alt: "An ornate archway entrance lit by chandeliers" },
  { src: unsplash("1774025108987-e987825baad0", 520, 700), alt: "A groom garlanded in marigolds on his way to the mandap" },
];

/* Services — one photograph per planning tier. */
export const servicePhotos: Photo[] = [
  { src: unsplash("1744804298431-57953e4eaba0", 800, 620), alt: "A couple under a floral arch as confetti falls around them" },
  { src: unsplash("1772127822562-a898d9f5733c", 800, 620), alt: "Rows of chairs and a mandap set up before guests arrive" },
  { src: unsplash("1774024872893-88d25b40c2d1", 800, 620), alt: "A bride applying tilak to the groom during the ceremony" },
];

/* Portfolio carousel. */
export const portfolioPhotos: (Photo & { caption: string; place: string })[] = [
  {
    src: unsplash("1745573673583-a51f665ae48e", 1200, 800),
    alt: "A red and gold wedding stage dressed with drapery and floral panels",
    caption: "Mandap & stage build",
    place: "Chandigarh",
  },
  {
    src: unsplash("1744891470493-44321ef136a2", 1200, 800),
    alt: "A haldi set-up under bright striped tenting with a pink carpet",
    caption: "Haldi in the courtyard",
    place: "Mohali",
  },
  {
    src: unsplash("1747041807198-b5f7172bd0ee", 1200, 800),
    alt: "A banquet hall dressed with drapery, chandeliers and blush seating",
    caption: "Reception hall",
    place: "Panchkula",
  },
  {
    src: unsplash("1774377767450-d647b609fc7f", 1200, 800),
    alt: "A singer in a red kurta performing on stage at a sangeet",
    caption: "Sangeet night",
    place: "Zirakpur",
  },
  {
    src: unsplash("1589778655375-3e622a9fc91c", 1200, 800),
    alt: "An overhead view of a thali laid with a dozen dishes",
    caption: "The 1973 kitchen",
    place: "Chandigarh",
  },
  {
    src: unsplash("1762968274962-20c12e6e8ecd", 1200, 800),
    alt: "A speaker presenting on a lit stage to a seated audience",
    caption: "Leadership summit",
    place: "Delhi NCR",
  },
];

/* Commitment — three overlapping mounted photographs. */
export const commitmentPhotos: Photo[] = [
  { src: unsplash("1665960213508-48f07086d49c", 700, 900), alt: "A couple in traditional dress, close together and laughing" },
  { src: unsplash("1599462616558-2b75fd26a283", 700, 900), alt: "A groom in a white sherwani leaning in to his bride" },
  { src: unsplash("1630526720753-aa4e71acf67d", 700, 900), alt: "A couple in red wedding dress photographed by the water" },
];

/* Why choose us — three portrait circles plus the small drifting bubbles. */
export const pillarPhotos: Photo[] = [
  { src: unsplash("1762709118823-7fe9c9afa8ff", 700, 700), alt: "A wedding stage with pale sofas and tall floral arrangements" },
  { src: unsplash("1759477274116-e3cb02d2b9d8", 700, 700), alt: "A banquet hall laid with round tables ahead of an event" },
  { src: unsplash("1747041807225-722af454c719", 700, 700), alt: "A grand hall lit by chandeliers and hanging florals" },
];

export const bubblePhotos: Photo[] = [
  { src: unsplash("1730003727902-3643640a3d43", 320, 320), alt: "" },
  { src: unsplash("1542042161784-26ab9e041e89", 320, 320), alt: "" },
  { src: unsplash("1505932794465-147d1f1b2c97", 320, 320), alt: "" },
  { src: unsplash("1597157639073-69284dc0fdaf", 320, 320), alt: "" },
  { src: unsplash("1681717075175-19feb7a6f664", 320, 320), alt: "" },
  { src: unsplash("1634693343333-9b6013c30d57", 320, 320), alt: "" },
  { src: unsplash("1587012521796-6359d3678f2a", 320, 320), alt: "" },
  { src: unsplash("1593507721017-4072754a93ba", 320, 320), alt: "" },
  { src: unsplash("1745573673416-66e829644ae9", 320, 320), alt: "" },
  { src: unsplash("1601050690597-df0568f70950", 320, 320), alt: "" },
];

/* Regional band. */
export const regionPhoto: Photo = {
  src: unsplash("1781077128735-ee92e7377d78", 1800, 1100),
  alt: "A groom arriving in a decorated carriage as fireworks go up behind him",
};

export const regionCards: Photo[] = [
  { src: unsplash("1743757452117-936ea69be6af", 520, 420), alt: "Three men in traditional Punjabi wedding dress" },
  { src: unsplash("1711153419402-336ee48f2138", 520, 420), alt: "A steel thali tray filled with freshly cooked dishes" },
  { src: unsplash("1744891471118-f74c0453cd21", 520, 420), alt: "A brightly draped entrance arch at an outdoor function" },
];

/* FAQ — the two mounted photographs either side of the questions. */
export const faqPhotos: Photo[] = [
  { src: unsplash("1727430256509-0f897d6f4765", 640, 800), alt: "A couple exchanging garlands beneath a canopy of flowers" },
  { src: unsplash("1587271636175-90d58cdad458", 640, 800), alt: "A couple seated under a mandap during the ceremony" },
];
