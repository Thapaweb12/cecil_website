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
    <nav className="fixed top-0 z-20 w-full bg-foundation-gray-g-10">
      <div
        className={`container hidden lg:block   ${
          scroll ? "py-3" : "py-[26px]"
        }  transition-all duration-200 `}
      >
        <div className="flex items-center justify-between relative  ">
          <Link href={"/"}>
            <Image
              className={`object-contain ${
                scroll ? "w-48 h-10" : " w-52  min-[1100px]:w-[276px]"
              } transition-all duration-200`}
              src={LogoImage}
              alt="LogoImage"
            />
          </Link>
          <div className="flex absolute items-center gap-x-12 left-1/2 -translate-x-1/2 font-normal">
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
          <div className=" flex items-center gap-x-5 font-semibold text-foundation-blue-900 leading-7">
            <Link href={"/contact-us"}>Contact us</Link>
            <Link
              href={"/refer-and-earn"}
              className="py-[10px] px-5 bg-foundation-blue-50 rounded-[40px]"
            >
              Refer & Earn
            </Link>
          </div>
        </div>
      </div>
      <MobileNavbar scroll={scroll} />
    </nav>
  );
};

export default Navbar;
