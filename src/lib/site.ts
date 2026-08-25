/** Single source of truth for the details that repeat across the site. */

export const site = {
  name: "Eventiify",
  parent: "A unit of Chache Di Hatti",
  founded: "1973",
  tagline: "We Listen, We Plan, We Deliver",
  email: "hello@eventiify.com",
  phone: "+91 12345 67890",
  phoneHref: "tel:+911234567890",
  cities: "Chandigarh · Mohali · Panchkula · Delhi NCR",
  address: "Chandigarh, India",
};

export const navLeft = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
];

export const navRight = [
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#legacy", label: "Since 1973" },
  { href: "/contact", label: "Contact" },
];

export const navAll = [...navLeft, ...navRight];
