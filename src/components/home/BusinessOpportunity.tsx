import { HomeOpportunityImage } from "@/assets/images";
import Image from "next/image";
import React from "react";

const BusinessOpportunity = () => {
  return (
    <div className="container space-y-14">
      <div className="space-y-6">
        <h4 className="text-secondary text-xl font-semibold text-center">
          Business Opportunity
        </h4>
        <div className="font-medium">
          <p>
            Earn while you learn. If you are dissatisfied and want more in life
            or want to venture in a business, check out how you can start up
            your remote financial business with our business opportunity.
          </p>
          <p>
            Please watch the video below for additional information or complete
            the form to get started.
          </p>
        </div>
      </div>
      <div className="max-w-[350px] max-h-[350px] mx-auto">
        <Image
          src={HomeOpportunityImage}
          alt="HomeOpportunityImage"
          className="w-full h-[400px] object-contain"
        />
      </div>
      <div className="space-y-10">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
          <iframe
            className="w-full h-[400px]"
            src="https://www.youtube.com/embed/McNWKJIEVO4?si=C21GU2z5qwkt2yHz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <iframe
            className="w-full h-[400px]"
            src="https://www.youtube.com/embed/ad1sKHRUBlw?si=LMgY3dMPAMKGqFCC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/AnqqBtKbs1A?si=DwcOUkx-ONdV8lHe"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BusinessOpportunity;
