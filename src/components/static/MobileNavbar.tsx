"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { CrossIcon, HamBurgerIcon } from "@/assets/icons";
import { navLinks, socialData } from "./staticdata/navdata";
import { LogoImage } from "@/assets/images";

type Props = {
  scrolled: boolean;
};

const MobileNavbar = ({ scrolled }: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <div className="container flex h-[64px] items-center justify-between">
        <Link href="/" aria-label="Villacorta Insurance Services — home">
          <Image
            src={LogoImage}
            alt="Vantage Financial Alliance"
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="rounded-lg p-1.5 text-navy hover:bg-surface-2"
        >
          <HamBurgerIcon className="size-7" />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-navy-deep/40 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[82%] max-w-sm bg-surface shadow-lift transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Link href="/" onClick={close}>
            <Image
              src={LogoImage}
              alt="Vantage Financial Alliance"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            onClick={close}
            aria-label="Close menu"
            className="rounded-lg p-1.5 text-navy hover:bg-surface-2"
          >
            <CrossIcon className="size-7" />
          </button>
        </div>

        <nav className="flex flex-col px-3 py-3">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              onClick={close}
              href={item.link}
              className={`rounded-lg px-3 py-3 text-base transition-colors ${
                pathname === item.link
                  ? "bg-surface-2 font-semibold text-navy"
                  : "font-medium text-body hover:bg-surface-2"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="px-5 pt-3">
          <Link href="/contact" onClick={close} className="btn-primary w-full">
            Free Consultation
          </Link>
          <div className="mt-6 flex gap-5">
            {socialData.map((item, index) => (
              <Link
                target="_blank"
                href={item.link ?? "/"}
                key={index}
                aria-label={item.label}
                className="text-secondary hover:text-teal"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
