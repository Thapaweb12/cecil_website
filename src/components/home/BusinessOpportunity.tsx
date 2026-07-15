import Image from "next/image";
import Link from "next/link";
import { EagleLogoImage } from "@/assets/images";
import { site } from "@/lib/site";

/**
 * Business Opportunity / recruiting section for the VANTAGE EAGLES team.
 * The eagle logo is Cecile's team brand (NOT the Vantage brokerage logo in the
 * header). It ships with its own dark background, so it sits on the navy band.
 */
const BusinessOpportunity = () => {
  return (
    <section
      id="business-opportunity"
      aria-labelledby="bizop-heading"
      className="section relative overflow-hidden bg-grad-navy text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-teal/10 blur-3xl"
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Team logo */}
        <div className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-lift ring-1 ring-white/5">
            <Image
              src={EagleLogoImage}
              alt="VANTAGE EAGLES — Cecile Villacorta's insurance mentorship team logo"
              className="h-full w-full object-cover"
              placeholder="blur"
            />
          </div>
          <p className="mt-4 text-center text-sm font-medium tracking-wide text-white/70">
            Join the <span className="font-semibold text-white">VANTAGE EAGLES</span> team
          </p>
        </div>

        {/* Copy */}
        <div className="max-w-xl">
          <p className="eyebrow !text-teal before:!bg-teal">Business Opportunity</p>
          <h2
            id="bizop-heading"
            className="headline mt-4 text-3xl text-white md:text-4xl"
          >
            Earn While You Learn — Build Your Own Financial Business
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/85">
            <p>
              I also mentor and train individuals who want to increase their cash
              flow by becoming licensed life insurance professionals. Whether
              you&rsquo;re looking for a part-time income or a rewarding full-time
              career, I provide training, support, and mentorship to help you
              build a successful business while making a positive impact on the
              lives of others.
            </p>
            <p className="font-script text-2xl text-teal">
              Let&rsquo;s build your future — and help protect the futures of
              others, together.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join the Team
            </a>
            <Link href="/licensing" className="btn-ghost-light">
              See the Licensing Steps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunity;
