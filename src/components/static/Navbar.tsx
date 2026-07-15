"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import MobileNavbar from "./MobileNavbar";
import { socialData, navLinks } from "./staticdata/navdata";
import { LogoImage } from "@/assets/images";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (link: string) => "/" + pathname.split("/")[1] === link;

  return (
    <nav
      className={`fixed top-0 z-30 w-full border-b transition-all duration-200 ${
        scrolled
          ? "border-line bg-surface/90 shadow-soft backdrop-blur"
          : "border-transparent bg-surface"
      }`}
    >
      {/* Desktop */}
      <div className="container hidden h-[72px] items-center justify-between lg:flex">
        <Link
          href="/"
          className="flex-none"
          aria-label="Villacorta Insurance Services — home"
        >
          <Image
            src={LogoImage}
            alt="Vantage Financial Alliance"
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-9">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`text-sm transition-colors hover:text-teal ${
                isActive(item.link)
                  ? "font-semibold text-navy"
                  : "font-medium text-body"
              }`}
            >
              {item.title}
            </Link>
          ))}

          <div className="flex items-center gap-4 border-l border-line pl-6">
            {socialData.map((item, index) => (
              <Link
                target="_blank"
                href={item.link ?? "/"}
                key={index}
                aria-label={item.label}
                className="text-secondary transition-colors hover:text-teal"
              >
                {item.icon}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Free Consultation
          </Link>
        </div>
      </div>

      <MobileNavbar scrolled={scrolled} />
    </nav>
  );
};

export default Navbar;
