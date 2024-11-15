"use client";

import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { LogoImage } from "@/assets/images";
import { socialData } from "./staticdata/navdata";

const Footer = () => {
  const footerContactData = [
    {
      title: "ADDRESS",
      description: (
        <div className="whitespace-nowrap">
          <p>2934 E Garvey Ave S</p>
          <p>West Covina, CA 91791</p>
        </div>
      ),
    },

    {
      title: "CONNECT",
      description: (
        <div>
           <div className="whitespace-nowrap">
            <a href="mailto:cecilev628@gmail.com">
              {" "}
              Email: cecilev628@gmail.com
            </a>
          </div>
          <div className="whitespace-nowrap">
            <a href="tel:626-534-4411">Phone: 626-534-4411</a>
          </div>
         
        </div>
      ),
    },
  ];

  return (
    <div className="bg-slate-200  pb-10  text-black  font-medium text-base ">
      <div className="container py-5  grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10   ">
        <div className="h-28">
          <Image
            src={LogoImage}
            alt="LogoImage"
            className="object-contain w-full   h-full"
          />
        </div>
        {footerContactData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center   ">
              <div className="text-start"> {item.title}</div>
              <div className="border-t border-slate-700 text-start pt-3 mt-3 w-fit">
                {item.description}
              </div>
            </div>
          );
        })}
        <div className="flex flex-col  items-center ">
          <div className="font-semibold whitespace-nowrap">FOLLOW</div>
          <div className="flex gap-6 border-t border-slate-700 pt-3 mt-3">
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
      <div className="font-normal border-t border-slate-700 container pt-5 mt-5 text-center  sm:whitespace-nowrap">
        © {moment(new Date()).format("YYYY")} Thapa. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
