interface InavLinks {
  title: string;
  link: string;
}

export const navLinks: InavLinks[] = [
  {
    title: "Home",
    link: `/`,
  },
  {
    title: "Business Tracker",
    link: `/business-tracker`,
  },
  {
    title: "Licensing",
    link: "/licensing",
  },
  {
    title: "E and O",
    link: "/e-and-o",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

import {
  FacebookFilledIcon,
  InstagramFilledIcon,
  LinkedInFilledIcon,
} from "@/assets/icons";
export const socialData = [
  {
    icon: <FacebookFilledIcon className="text-primary size-7" />,
    link: "https://www.facebook.com/profile.php?id=100007386450316",
  },
  {
    icon: <LinkedInFilledIcon className="text-primary size-7" />,
    link: "https://www.linkedin.com/in/cecile-m-villacorta-rn-2340b371/",
  },
  {
    icon: <InstagramFilledIcon className="text-primary size-7" />,
    link: "https://www.instagram.com/cecile_villacorta_miranda",
  },
  // {
  //   icon: <TwitterIcon />,
  //   link: "companyData?.twitter",
  // },

  // {
  //   icon: <PintrestIcon />,
  //   link: "companyData?.linkedin",
  // },
];
