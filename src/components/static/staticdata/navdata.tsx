interface InavLinks {
  title: string;
  link: string;
}

export const navLinks: InavLinks[] = [
  {
    title: "Home",
    link: `/`,
  },
  // {
  //   title: "Business Tracker",
  //   link: `/business-tracker`,
  // },
  // {
  //   title: "Licensing",
  //   link: "/licensing",
  // },
  // {
  //   title: "E and O",
  //   link: "/e-and-o",
  // },
  {
    title: "Contact",
    link: "/contact",
  },
];

import { FacebookIcon, InstagramIcon } from "@/assets/icons";
export const socialData = [
  {
    icon: <FacebookIcon />,
    link: "fb.com",
  },
  {
    icon: <InstagramIcon />,
    link: "instagram.com",
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
