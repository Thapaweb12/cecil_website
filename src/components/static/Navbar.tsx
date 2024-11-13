"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import MobileNavbar from "./MobileNavbar";
import { navLinks } from "./staticdata/navdata";
import { LogoImage } from "@/assets/images";

const Navbar = () => {
  const pathname = usePathname();

  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      if (
        typeof window !== "undefined" &&
        (window.document.body.scrollTop > 80 ||
          window.document.documentElement.scrollTop > 80)
      ) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 z-20 w-full bg-slate-200">
      <div
        className={`container hidden lg:block   ${
          scroll ? "py-3" : "py-[26px]"
        }  transition-all duration-200 `}
      >
        <div className="flex items-center justify-between relative  ">
          <Link href={"/"}>
            <Image
              className={`object-contain ${
                scroll ? "h-10" : " h-16  "
              } transition-all duration-200`}
              src={LogoImage}
              alt="LogoImage"
            />
          </Link>
          <div className="flex items-center gap-x-12 font-normal">
            {Array.isArray(navLinks) &&
              navLinks?.map((item, idx) => {
                return (
                  <div key={idx}>
                    <Link
                      href={item?.link}
                      className={`${
                        "/" + pathname.split("/")[1] === item?.link
                          ? "font-bold  text-foundation-blue-900"
                          : "text-foundation-gray-g-600"
                      }`}
                    >
                      {item?.title}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <MobileNavbar scroll={scroll} />
    </nav>
  );
};

export default Navbar;
