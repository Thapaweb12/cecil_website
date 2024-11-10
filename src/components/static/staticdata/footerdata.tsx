interface IfooterSubItems {
  title: string
  link: string
}

interface IfooterItems {
  title: string
  items: IfooterSubItems[]
}
export const footerMenuItems: IfooterItems[] = [
  {
    title: "Menu",
    items: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Services",
        link: "/services",
      },
      {
        title: "Net TV",
        link: "/",
      },
      {
        title: "About us",
        link: "/about-us",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "Career",
        link: "/careers",
      },
      {
        title: "Mission & vision",
        link: "/about-us#our-mission",
      },
      {
        title: "Privacy policy",
        link: "/privacy-and-polices",
      },
      {
        title: "Terms & Conditions",
        link: "/terms-and-conditions",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Refer & Earn",
        link: "/refer-and-earn",
      },
      {
        title: "Popular plans",
        link: "/services/residential-plan?slug=residential-plans",
      },
      {
        title: "For sale",
        link: "/contact-us",
      },
      {
        title: "Support",
        link: "/contact-us",
      },
    ],
  },
]
