import { ProfileImage2, ProfileQuoteImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import ShareButton from "./ShareButton";
import CustomButton from "../common/CustomButton";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  WebsiteIcon,
} from "@/assets/icons";
import Link from "next/link";

import DigitalCardForm from "./DigitalCardForm";

type Props = {};

const socialData = [
  {
    title: "Call",
    icon: <PhoneIcon className="text-primary size-7" />,
    link: "tel:626-534-4411",
  },
  {
    title: "Mail",
    icon: <MailIcon className="text-primary size-7" />,
    link: "mailto:cecilev628@gmail.com",
  },
  {
    title: "Website",
    icon: <WebsiteIcon className="text-primary size-7" />,
    link: "/",
  },
  {
    title: "Facebook",
    icon: <FacebookIcon className="text-primary size-7" />,
    link: "https://www.facebook.com/profile.php?id=100007386450316",
  },
  {
    title: "Linkedin",
    icon: <LinkedInIcon className="text-primary size-7" />,
    link: "https://www.linkedin.com/in/cecile-m-villacorta-rn-2340b371/",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon className="text-primary size-7" />,
    link: "https://www.instagram.com/cecile_villacorta_miranda",
  },
];

const DigitalCard = (props: Props) => {
  return (
    <div className="mx-auto max-w-[340px] w-full flex flex-col items-center justify-center gap-y-6 py-16 ">
      <div className="w-[240px] flex-shrink-0 h-[320px] relative ">
        <Image
          src={ProfileImage2}
          alt="Profile Image"
          className="w-full h-full rounded-2xl"
        />
        <ShareButton />
      </div>
      <div className="w-full flex-shrink-0 max-w-[250px]">
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
            target="_blank"
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
