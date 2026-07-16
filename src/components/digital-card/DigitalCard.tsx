import { ProfileImage2 } from "@/assets/images";
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

const cardServices = [
  "Complimentary Financial Needs Analysis",
  "No-Cost Review of Your Existing Insurance Policies",
  "Life Insurance with Living Benefits",
  "Mortgage Protection",
  "Term Life Insurance with Living Benefits",
  "Final Expense Planning",
  "Debt Management Solutions",
  "Wills and Trust Referrals",
  "Indexed Annuities with Guaranteed Lifetime Income",
];

const DigitalCard = (props: Props) => {
  return (
    <div className="mx-auto w-full max-w-[420px] flex flex-col items-center justify-center gap-y-6 px-5 py-10 sm:py-16 ">
      <div className="w-full max-w-[280px] aspect-[4/5] flex-shrink-0 relative ">
        <Image
          src={ProfileImage2}
          alt="Profile Image"
          className="w-full h-full rounded-2xl object-cover"
        />
        <ShareButton />
      </div>
      <div className="w-full flex-shrink-0">
        <h1 className="text-[26px] font-bold text-center">
          Cecile M. Villacorta
        </h1>
        <div className="text-xs ">
          <p className="text-center py-2">National Marketing Director - VFA</p>

          <p className="text-center leading-5">
            Entrepreneur, Specializing in Life Insurance with Living Benefits,
            Insurance Professional Team Builder
          </p>
          <p className="mt-1 text-center">LIC. California #0L99919</p>
        </div>
      </div>

      <a
        href="/Cecile-M.-Villacorta.vcf"
        download={"Cecile M. Villacorta.vcf"}
        className="w-full max-w-[240px]"
      >
        <CustomButton className="text-sm font-semibold w-full">
          Add to contact
        </CustomButton>
      </a>

      <div className="grid w-full grid-cols-2 gap-4">
        {socialData?.map((item, index) => (
          <Link
            href={item?.link}
            key={index}
            target="_blank"
            className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center gap-3 font-medium min-h-[88px] active:bg-gray-200"
          >
            {item?.icon}
            {item?.title}
          </Link>
        ))}
      </div>
      <div className="w-full flex-shrink-0">
        <h2 className="text-xl font-bold text-center text-dark-blue mb-4">
          My Services
        </h2>
        <ul className="space-y-2 text-sm font-medium list-disc pl-5">
          {cardServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
      <DigitalCardForm />
    </div>
  );
};

export default DigitalCard;
