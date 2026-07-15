import Image from "next/image";
import Link from "next/link";

import { LogoImage } from "@/assets/images";
import { socialData } from "./staticdata/navdata";

const exploreLinks = [
  { title: "Home", link: "/" },
  { title: "My Services", link: "/#services" },
  { title: "Business Tracker", link: "/business-tracker" },
  { title: "Licensing", link: "/licensing" },
  { title: "Contact", link: "/contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white/75">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-xl font-bold text-white">
            Villacorta Insurance&nbsp;Services
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            Helping California families protect what matters most — with life
            insurance, living benefits, annuities and retirement planning.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-white/50">
            CA Insurance Lic. #0L99919
          </p>

          <div className="mt-5 inline-flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2">
            <Image
              src={LogoImage}
              alt="Vantage Financial Alliance"
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.title}>
                <Link href={l.link} className="transition-colors hover:text-teal">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h2>
          <address className="mt-4 space-y-2.5 text-sm not-italic">
            <p className="text-white/70">
              2934 E Garvey Ave S<br />
              West Covina, CA 91791
            </p>
            <p>
              <a href="tel:626-534-4411" className="transition-colors hover:text-teal">
                626-534-4411
              </a>
            </p>
            <p>
              <a
                href="mailto:cecilev628@gmail.com"
                className="break-all transition-colors hover:text-teal"
              >
                cecilev628@gmail.com
              </a>
            </p>
          </address>
        </div>

        {/* Follow */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Follow
          </h2>
          <div className="mt-4 flex gap-4">
            {socialData.map((item, index) => (
              <Link
                target="_blank"
                href={item.link ?? "/"}
                key={index}
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal hover:text-white"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© {year} Villacorta Insurance Services. All rights reserved.</p>
            <p>
              Powered by{" "}
              <a
                href="https://thapaweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 transition-colors hover:text-teal"
              >
                ThapaWeb
              </a>
            </p>
          </div>
          <p className="max-w-2xl md:text-right">
            Insurance products offered through Vantage Financial Alliance.
            Products and availability vary by state. This site is for
            informational purposes and is not a solicitation of any specific
            insurance policy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
