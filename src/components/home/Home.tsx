import React from "react";
import Hero from "./Hero";
import OurMission from "./OurMission";
import OurServices from "./OurServices";
import BusinessOpportunity from "./BusinessOpportunity";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="space-y-12">
      <Hero />
      <OurMission />
      <OurServices />
      <BusinessOpportunity />
    </div>
  );
};

export default Home;
