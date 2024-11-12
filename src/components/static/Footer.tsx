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

import { footerMenuItems } from "./staticdata/footerdata";
import { LogoImage } from "@/assets/images";

const Footer = () => {
  const footerContactData = [
    {
      icon: <MapPinIcon className="size-6" />,
      title: "Mailing address",
      description: "companyData?.mailing_address",
    },

    {
      icon: <PhoneIcon />,
      title: "Toll-free no",
      description: "companyData?.toll_free_number",
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
    <div className="bg-foundation-blue-900  text-white  font-medium text-base ">
      <div className="container relative pt-5 pb-6  sm:pt-12 sm:pb-14">
        <div className="w-72 md:w-[374px] ">
          <Image
            src={LogoImage}
            alt="LogoImage"
            className="object-contain"
            width={100}
            height={100}
          />
        </div>

        <div className=" gap-10 flex flex-col lg:flex-row lg:justify-between   mt-12">
          <div className=" grid  grid-cols-2 min-[520px]:grid-cols-3 gap-7 md:gap-[87px]">
            {footerMenuItems.map((item, index) => {
              return (
                <div className="flex flex-col gap-[30px]" key={index}>
                  <p className="font-extrabold ">{item.title}</p>
                  <div className="gap-4 flex flex-col ">
                    {item.items.map((data, index) => {
                      return (
                        <Link href={data.link} key={index}>
                          {data.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-[#6C9BCC] w-fit border-t-[1px] md:pr-[102px] flex items-center mt-8 pt-7 pb-11 ">
          <div className="grid grid-cols-2  md:flex  gap-10 ">
            {footerContactData.map((item, index) => {
              return (
                <div
                  className="flex gap-2 items-start justify-start"
                  key={index}
                >
                  <div>{item.icon}</div>
                  <div className="flex flex-col space-y-[2px]">
                    <p className="font-semibold">{item.title}</p>
                    <p
                      className={index === 0 ? "font-medium" : "font-semibold"}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between  pt-7   border-[#6C9BCC] border-t-[1px]">
          <span className="font-normal  whitespace-nowrap">
            © {moment(new Date()).format("YYYY")} Ishan Thapa. All rights
            reserved.
          </span>
          <div className="flex gap-5">
            <span className=" font-semibold whitespace-nowrap">Follow us</span>
            <div className="flex gap-6">
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
    </div>
  );
};
export default Footer;
