import { ProfileImage, ProfileQuoteImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import ShareButton from "./ShareButton";
import CustomButton from "../common/CustomButton";
import { FacebookIcon, InstagramIcon, PhoneIcon } from "@/assets/icons";
import Link from "next/link";
import CustomInput from "../common/CustomInput";
import { useForm } from "react-hook-form";
import DigitalCardForm from "./DigitalCardForm";

type Props = {};

const socialData = [
  {
    title: "Facebook",
    icon: <FacebookIcon className="text-primary size-7" />,
    link: "/",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon className="text-primary size-7" />,
    link: "/",
  },
  {
    title: "Linkedin",
    icon: <FacebookIcon className="text-primary size-7" />,
    link: "/",
  },
  {
    title: "Call",
    icon: <PhoneIcon className="text-primary size-7" />,
    link: "/",
  },
  {
    title: "Mail",
    icon: <FacebookIcon className="text-primary size-7" />,
    link: "/",
  },
  {
    title: "Website",
    icon: <FacebookIcon className="text-primary size-7" />,
    link: "/",
  },
];

const DigitalCard = (props: Props) => {
  return (
    <div className="mx-auto max-w-[340px] w-full flex flex-col items-center justify-center gap-y-6 py-16 ">
      <div className="w-[240px] flex-shrink-0 h-[320px] relative ">
        <Image
          src={ProfileImage}
          alt="Profile Image"
          className="w-full h-full"
        />
        <ShareButton />
      </div>
      <div className="w-full flex-shrink-0 max-w-[270px]">
        <h1 className="text-[26px] font-bold text-center">
          Cecile M. Villacorta
        </h1>
        <div className="text-xs ">
          <p className="text-center py-2">Qualified Field Director - PFA</p>

          <p className="leading-5">
            Entrepreneur, Specializing in Life Insurance with Living Benefits,
            Insurance Professional Team Builder
          </p>
          <p className="mt-1">LIC. California #0L99919</p>
        </div>
      </div>

      <a href="/Cecile-M.-Villacorta.vcf" download={"Cecile M. Villacorta.vcf"}>
        <CustomButton className="text-sm font-semibold  w-[200px]">
          Add to contact
        </CustomButton>
      </a>

      <div className="grid grid-cols-2 gap-4">
        {socialData?.map((item, index) => (
          <Link
            href={item?.link}
            key={index}
            className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center gap-3 font-medium"
          >
            {item?.icon}
            {item?.title}
          </Link>
        ))}
      </div>
      <div className="w-[280px] flex-shrink-0 h-[320px] ">
        <Image
          src={ProfileQuoteImage}
          alt="Profile Quote Image"
          className="w-full h-full"
        />
      </div>
      <DigitalCardForm />
    </div>
  );
};

export default DigitalCard;
