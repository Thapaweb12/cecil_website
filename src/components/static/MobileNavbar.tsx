import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { CrossIcon, HamBurgerIcon } from "@/assets/icons";

import { navLinks, socialData } from "./staticdata/navdata";
import { LogoImage } from "@/assets/images";

type Props = {
  scroll: boolean;
};

const MobileNavbar = ({ scroll }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const pathname = usePathname();
  return (
    <div
      className={`block  ${
        scroll ? "py-3" : "py-5"
      }  transition-all duration-200 sm:hidden`}
    >
      <div className="container flex items-center justify-between ">
        <Link href={"/"}>
          <Image
            className={`object-contain w-20 h-10  transition-all duration-200`}
            src={LogoImage}
            alt="LogoImage"
            priority
          />
        </Link>
        <button onClick={() => setIsSidebarOpen((prev) => !prev)}>
          <HamBurgerIcon
            className={` ${
              isSidebarOpen ? "size-0" : "size-8"
            } transition-all duration-200 text-foundation-gray-g-700 snap-center`}
          />
        </button>
      </div>
      <div
        className={`${
          isSidebarOpen ? "w-full  min-[600px]:w-[70%] " : "w-0"
        }  absolute right-0 top-0 z-10 h-screen overflow-x-hidden bg-slate-200 py-3 transition-all duration-200`}
      >
        <div className="py-3">
          <div className="flex items-center justify-between  min-[600px]:justify-end px-3">
            <Link href={"/"} onClick={() => setIsSidebarOpen((prev) => !prev)}>
              <Image
                className={`object-contain w-20 h-10 min-[600px]:w-0 " transition-all duration-200`}
                src={LogoImage}
                alt="LogoImage"
                priority
              />
            </Link>
            <button onClick={() => setIsSidebarOpen(false)}>
              <CrossIcon
                className={` ${
                  isSidebarOpen ? "size-8" : "size-0"
                } transition-all duration-200 text-foundation-gray-g-700 snap-center`}
              />
            </button>
          </div>
          <div className="pt-4  min-[600px]:pt-0">
            {Array.isArray(navLinks) &&
              navLinks?.map((item, idx) => {
                return (
                  <div className="border-b border-gray-400" key={idx}>
                    <Link
                      onClick={() => {
                        setIsSidebarOpen(false);
                      }}
                      href={item.link}
                      className="w-full"
                    >
                      <p
                        className={`px-3 py-3 text-lg  ${
                          pathname === item?.link
                            ? "font-semibold text-foundation-gray-g-800"
                            : "text-foundation-gray-g-600 "
                        } `}
                      >
                        {item.title}
                      </p>
                    </Link>
                  </div>
                );
              })}
            <div className="flex gap-6  pt-4 px-3 ">
              {socialData.map((item, index) => {
                return (
                  <Link target="_blank" href={item.link ?? "/"} key={index}>
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
