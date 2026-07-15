import {
  FacebookFilledIcon,
  InstagramFilledIcon,
  LinkedInFilledIcon,
} from "@/assets/icons";

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
    title: "Contact",
    link: "/contact",
  },
];

export const socialData = [
  {
    label: "Facebook",
    icon: <FacebookFilledIcon className="size-6" />,
    link: "https://www.facebook.com/profile.php?id=100007386450316",
  },
  {
    label: "LinkedIn",
    icon: <LinkedInFilledIcon className="size-6" />,
    link: "https://www.linkedin.com/in/cecile-m-villacorta-rn-2340b371/",
  },
  {
    label: "Instagram",
    icon: <InstagramFilledIcon className="size-6" />,
    link: "https://www.instagram.com/cecile_villacorta_miranda",
  },
];
