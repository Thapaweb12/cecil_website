import React from "react";

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

/**
 * Reusable interior page banner (Licensing, E&O, Business Tracker).
 * Renders the page's single <h1>. The homepage uses <HomeHero> instead.
 */
const Hero = ({
  eyebrow = "Villacorta Insurance Services",
  title = "Villacorta Insurance Services",
  subtitle,
}: Props) => {
  return (
    <div className="relative isolate overflow-hidden bg-navy-deep">
      <div
        className="absolute inset-0 bg-[url('/home-hero-bg.jpeg')] bg-cover bg-center opacity-25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grad-navy opacity-80" aria-hidden />
      <div className="container relative py-16 md:py-20 text-white">
        <p className="eyebrow !text-teal before:!bg-teal">{eyebrow}</p>
        <h1 className="headline mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
