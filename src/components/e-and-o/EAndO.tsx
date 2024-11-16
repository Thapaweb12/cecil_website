import React from "react";
import Hero from "../home/Hero";
import ErrorsAndOmissions from "./ErrorsAndOmissions";

type Props = {};

const EAndO = (props: Props) => {
  return (
    <div className="space-y-6">
      <Hero />
      <ErrorsAndOmissions />
    </div>
  );
};

export default EAndO;
