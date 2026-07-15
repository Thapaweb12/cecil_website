/**
 * Carrier wall — "The Power of Choice".
 *
 * Each carrier is data-driven. `logo` points to an official logo file in
 * /public/carriers. To swap or add a logo later, drop the file in that folder
 * and update the path here — the layout stays identical. Carriers without a
 * `logo` fall back to a clean text wordmark. Names are always present in the
 * DOM (as <img alt> / sr-only text / wordmark) so search engines and AI answer
 * engines can read them (SEO / GEO / AEO).
 */
type Carrier = {
  name: string;
  logo?: string;
};

const carriers: Carrier[] = [
  { name: "Ethos", logo: "/carriers/ethos.png" },
  { name: "North American", logo: "/carriers/north-american.png" },
  { name: "Augustar" },
  { name: "Athene", logo: "/carriers/athene.svg" },
  { name: "Nationwide", logo: "/carriers/nationwide.svg" },
  { name: "Corebridge Financial", logo: "/carriers/corebridge.svg" },
  { name: "Quantum", logo: "/carriers/quantum.png" },
  { name: "Allianz", logo: "/carriers/allianz.svg" },
  { name: "Annexus", logo: "/carriers/annexus.png" },
  { name: "American National", logo: "/carriers/american-national.svg" },
  { name: "Prudential", logo: "/carriers/prudential.svg" },
  { name: "Mutual of Omaha", logo: "/carriers/mutual-of-omaha.svg" },
  { name: "AIG", logo: "/carriers/aig.svg" },
  { name: "Foresters Financial", logo: "/carriers/foresters.svg" },
  { name: "Security Benefit", logo: "/carriers/security-benefit.svg" },
];

const CarrierWall = () => {
  return (
    <section
      id="carriers"
      aria-labelledby="carriers-heading"
      className="section bg-surface"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">The Power of Choice</p>
          <h2 id="carriers-heading" className="headline mt-4 text-3xl md:text-4xl">
            Carriers We Represent
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            We represent our industry, not just one company. We select quality
            products from these and other companies to help people reach their
            financial objectives.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {carriers.map((c) => (
            <li key={c.name}>
              <div className="group flex h-24 items-center justify-center rounded-2xl border border-line bg-surface px-5 text-center shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/60 hover:shadow-card">
                {c.logo ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="max-h-11 w-auto max-w-full object-contain"
                    />
                    <span className="sr-only">{c.name}</span>
                  </>
                ) : (
                  <span className="text-lg font-semibold tracking-tight text-navy transition-colors group-hover:text-teal-700">
                    {c.name}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-muted">
          Products and availability vary by state. Carrier names and logos are
          the property of their respective owners.
        </p>
      </div>
    </section>
  );
};

export default CarrierWall;
