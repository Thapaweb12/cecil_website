import React from "react";
import Hero from "./Hero";
import OurMission from "./OurMission";
import OurServices from "./OurServices";
import BusinessOpportunity from "./BusinessOpportunity";
import ContactUs from "./ContactUs";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="space-y-12 pb-20">
      <Hero />
      <OurMission />
      <OurServices />
      <BusinessOpportunity />
      <ContactUs />
    </div>
  );
};

export default Home;
