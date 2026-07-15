import Image from "next/image";
import Link from "next/link";
import { ProfileImage2 } from "@/assets/images";

/**
 * Home hero — the HTML rebuild of the "Helping You Protect What Matters Most"
 * flyer. Real text (good for SEO/GEO/AEO) instead of a flattened image.
 */
const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-surface-2">
      {/* soft brand glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="container relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="eyebrow">Villacorta Insurance Services</p>

          <h1 className="mt-5">
            <span className="script block text-4xl sm:text-5xl">Helping You</span>
            <span className="headline mt-1 block text-4xl sm:text-5xl lg:text-6xl">
              Protect What Matters Most
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-body">
            I provide personalized financial protection and planning solutions
            designed to help individuals and families build a more secure future
            — life insurance with living benefits, retirement income and
            legacy planning.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#contact" className="btn-primary">
              Get a Free Needs Analysis
            </Link>
            <Link href="#services" className="btn-outline">
              Explore My Services
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                Licensed Agent
              </dt>
              <dd className="mt-1 font-semibold text-ink">CA #0L99919</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                Brokerage
              </dt>
              <dd className="mt-1 font-semibold text-ink">
                Vantage Financial Alliance
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                Serving
              </dt>
              <dd className="mt-1 font-semibold text-ink">
                California &amp; multiple states
              </dd>
            </div>
          </dl>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] bg-grad-brand opacity-90"
          />
          <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-lift">
            <Image
              src={ProfileImage2}
              alt="Cecile M. Villacorta, insurance agent at Vantage Financial Alliance"
              className="h-full w-full object-cover"
              priority
              placeholder="blur"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border border-line bg-surface/95 px-5 py-3 text-center shadow-card backdrop-blur">
            <p className="text-sm font-semibold text-ink">Cecile M. Villacorta</p>
            <p className="text-xs text-muted">
              National Marketing Director · Living Benefits Specialist
            </p>
          </div>
        </div>
      </div>

      {/* tagline strip */}
      <div className="border-t border-line/80 bg-surface/70">
        <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-4 text-center text-sm font-medium text-body">
          <span className="font-script text-xl text-teal">Plan Today.</span>
          <span className="font-semibold uppercase tracking-wide text-navy">
            Protect Tomorrow.
          </span>
          <span className="text-muted">
            Your future. Your family. Your legacy.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
