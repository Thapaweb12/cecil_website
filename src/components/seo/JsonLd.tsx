import { site } from "@/lib/site";

/**
 * Structured data (schema.org JSON-LD) for search engines and AI answer
 * engines (SEO / GEO / AEO). Everything here is grounded in real, on-page
 * facts — no marketing claims. Rendered once, in the root layout.
 */

const carriers = [
  "Ethos",
  "North American",
  "Augustar",
  "Athene",
  "Nationwide",
  "Corebridge Financial",
  "Quantum",
  "Allianz",
  "Annexus",
  "American National",
  "Prudential",
  "Mutual of Omaha",
  "AIG",
  "Foresters Financial",
  "Security Benefit",
];

const services = [
  "Financial Needs Analysis",
  "Insurance Policy Review",
  "Life Insurance with Living Benefits",
  "Mortgage Protection",
  "Term Life Insurance",
  "Final Expense Planning",
  "Debt Management",
  "Wills and Trust Referrals",
  "Indexed Annuities",
];

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

const insuranceAgency = {
  "@type": "InsuranceAgency",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  image: `${site.url}${site.ogImage}`,
  telephone: site.telephone,
  email: site.email,
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
  knowsAbout: services,
  sameAs: site.sameAs,
  founder: { "@id": `${site.url}/#cecile` },
  employee: { "@id": `${site.url}/#cecile` },
};

const person = {
  "@type": "Person",
  "@id": `${site.url}/#cecile`,
  name: site.personName,
  jobTitle: site.jobTitle,
  telephone: site.telephone,
  email: site.email,
  worksFor: { "@type": "Organization", name: site.brokerage },
  url: site.url,
  sameAs: site.sameAs,
};

const faq = {
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is life insurance with living benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Living benefits are provided by no-additional-premium accelerated benefit riders on a life insurance policy. They can let you access part of your benefit while you are still living if you experience a qualifying critical, chronic, or terminal illness (in applicable states), rather than only paying out after death.",
      },
    },
    {
      "@type": "Question",
      name: "Which insurance carriers does Cecile Villacorta represent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Villacorta Insurance Services represents multiple carriers, including ${carriers.join(
          ", "
        )}, and other companies — selecting products to fit each client's goals.`,
      },
    },
    {
      "@type": "Question",
      name: "What areas does Cecile Villacorta serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cecile M. Villacorta is a licensed insurance agent in California (CA Lic. #0L99919) and is also licensed in additional states.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Villacorta Insurance Services offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Services include ${services.join(
          ", "
        )}. A complimentary financial needs analysis and a no-cost review of existing policies are also available.`,
      },
    },
  ],
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [insuranceAgency, person, faq],
};

const JsonLd = () => (
  <script
    type="application/ld+json"
    // Static, trusted content — safe to inline as JSON-LD.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
  />
);

export default JsonLd;
