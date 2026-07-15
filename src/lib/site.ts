/**
 * Single source of truth for site-wide identity, contact (NAP) and SEO data.
 * If Cecile moves to a custom domain, change `url` here and everything
 * (metadata, canonicals, sitemap, JSON-LD, Open Graph) updates with it.
 */
export const site = {
  name: "Villacorta Insurance Services",
  personName: "Cecile M. Villacorta",
  jobTitle: "National Marketing Director",
  brokerage: "Vantage Financial Alliance",
  url: "https://cecilevillacorta.thapaweb.com",
  license: "CA Insurance Lic. #0L99919",
  description:
    "Cecile M. Villacorta, National Marketing Director at Vantage Financial Alliance, helps California families protect what matters most with life insurance, living benefits, annuities and retirement planning.",
  // Cecile's Vantage recruiting / "join the team" funnel.
  joinUrl: "https://opportunity.iamvantage.com/?refid=NJ7765",
  telephone: "+1-626-534-4411",
  telephoneDisplay: "626-534-4411",
  email: "cecilev628@gmail.com",
  address: {
    street: "2934 E Garvey Ave S",
    city: "West Covina",
    region: "CA",
    postalCode: "91791",
    country: "US",
  },
  geo: { latitude: 34.0712474, longitude: -117.8862333 },
  areaServed: ["California", "United States"],
  sameAs: [
    "https://www.facebook.com/profile.php?id=100007386450316",
    "https://www.linkedin.com/in/cecile-m-villacorta-rn-2340b371/",
    "https://www.instagram.com/cecile_villacorta_miranda",
  ],
  ogImage: "/og-image.jpg",
} as const;
