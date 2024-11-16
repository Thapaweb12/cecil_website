import React from "react";
import Hero from "../home/Hero";
import BusinessTrackerForm from "./BusinessTrackerForm";

type Props = {};

const BusinessTracker = (props: Props) => {
  return (
    <div className="space-y-6 pb-10">
      <Hero />
      <h1 className="custom-outline text-4xl text-center text-gray-800 font-extrabold uppercase">
        WHY I JOINED PFA
      </h1>
      <BusinessTrackerForm />
    </div>
  );
};

export default BusinessTracker;
