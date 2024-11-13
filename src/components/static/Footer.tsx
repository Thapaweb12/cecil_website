"use client";

import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  PintrestIcon,
  TwitterIcon,
} from "@/assets/icons";

import { LogoImage } from "@/assets/images";

const Footer = () => {
  const footerContactData = [
    {
      title: "ADDRESS",
      description: "2934 E. Garvey Ave. S.W. Covina, CA 91791",
    },

    {
      title: "CONNECT",
      description: (
        <div>
          <a href="tel:626-534-4411">Phone: 626-534-4411</a>
          <a href="mailto:cecilev628@gmail.com"> Email: cecilev628@gmail.com</a>
        </div>
      ),
    },
  ];

  const footerSocialData = [
    {
      icon: <TwitterIcon />,
      link: "companyData?.twitter",
    },
    {
      icon: <FacebookIcon />,
      link: "companyData?.facebook",
    },
    {
      icon: <InstagramIcon />,
      link: "companyData?.instagram",
    },
    {
      icon: <PintrestIcon />,
      link: "companyData?.linkedin",
    },
  ];
  return (
    <div className="bg-slate-200  pb-10  text-black  font-medium text-base ">
      <div className="container py-5 flex gap-10  ">
        <div className="w-40 ">
          <Image
            src={LogoImage}
            alt="LogoImage"
            className="object-contain"
            width={100}
            height={100}
          />
        </div>
        <div className="grid grid-cols-3 gap-x-10  ">
          {footerContactData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col  ">
                <div className="text-center"> {item.title}</div>
                <div className="border-t border-slate-700 text-center pt-3 mt-3 w-fit">
                  {item.description}
                </div>
              </div>
            );
          })}
          <div className="flex flex-col items-center">
            <div className="font-semibold whitespace-nowrap">FOLLOW</div>
            <div className="flex gap-6 border-t border-slate-700 pt-3 mt-3">
              {footerSocialData.map((item, index) => {
                return (
                  <Link href={item.link ?? "/"} key={index}>
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="font-normal border-t border-slate-700 container pt-5 mt-5 text-center  whitespace-nowrap">
        © {moment(new Date()).format("YYYY")} Ishan Thapa. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
