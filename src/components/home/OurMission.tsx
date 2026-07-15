import { HomeOurMissionImage } from "@/assets/images";
import Image from "next/image";

const values = [
  {
    title: "Independent & unbiased",
    body: "I represent many top-rated carriers, not just one — so recommendations are built around you, not a single product line.",
  },
  {
    title: "Living-benefits focused",
    body: "Coverage that can help while you're living — for critical, chronic, or terminal illness — not only after you're gone.",
  },
  {
    title: "Personal, ongoing support",
    body: "Clear guidance in plain language, and a real person to call as your needs and your family change over time.",
  },
];

const OurMission = () => {
  return (
    <section id="about" className="section bg-surface" aria-labelledby="mission-heading">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-last lg:order-first">
          <div
            aria-hidden
            className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl bg-grad-brand opacity-90"
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-lift">
            <Image
              src={HomeOurMissionImage}
              className="h-full w-full object-cover"
              alt="Cecile Villacorta reviewing a financial plan with a family"
              placeholder="blur"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">My Mission</p>
          <h2
            id="mission-heading"
            className="headline mt-4 text-3xl md:text-4xl"
          >
            Making Protection Simple, Personal &amp; Within Reach
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Every family deserves a plan that protects the people and the future
            they love. My mission is to take the time to understand your goals,
            explain your options in plain language, and match you with the right
            coverage from a wide range of trusted carriers — no pressure, no
            jargon, just honest guidance you can build on.
          </p>

          <ul className="mt-8 space-y-5">
            {values.map((v) => (
              <li key={v.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-grad-brand text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 5 5 9-11" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-ink">{v.title}</h3>
                  <p className="mt-1 text-body">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
