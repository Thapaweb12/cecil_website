import { HomeOurMissionImage } from "@/assets/images";
import Image from "next/image";
import React from "react";

type Props = {};

const OurMission = (props: Props) => {
  return (
    <div className="container flex flex-col md:flex-row gap-x-12 gap-y-8">
      <div className="max-w-[520px] h-[300px] w-full">
        <Image
          src={HomeOurMissionImage}
          className="w-full h-full"
          alt="Our Mission Image"
        />
      </div>
      <div className="space-y-5">
        <h2 className="text-3xl font-bold text-center">Our Mission</h2>
        <p className="max-w-[520px]">
          Our System is proven to renovate your life whatever background or
          experience you&#39;ve had. Our mentorship program to success will
          empower you to take control of your future and have the life
          you&#39;ve wanted as long as you&#39;re coachable, available, and hard
          working.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
