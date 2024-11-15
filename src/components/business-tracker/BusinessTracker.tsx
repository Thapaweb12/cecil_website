import React from "react";
import Hero from "../home/Hero";
import BusinessTrackerForm from "./BusinessTrackerForm";

type Props = {};

const BusinessTracker = (props: Props) => {
  return (
    <div className="space-y-6 pb-10">
      <Hero />
      <BusinessTrackerForm />
    </div>
  );
};

export default BusinessTracker;
