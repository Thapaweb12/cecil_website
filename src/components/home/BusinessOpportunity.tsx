import {
  AreYouReadyImage,
  HomeOpportunityImage,
  ReitrementReadinessImage,
} from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
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
          className="w-full h-[314px] object-contain"
        />
      </div>
      <div className="space-y-10">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
          <iframe
            className="w-full h-[314px]"
            src="https://www.youtube.com/embed/McNWKJIEVO4?si=C21GU2z5qwkt2yHz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <iframe
            className="w-full h-[314px]"
            src="https://www.youtube.com/embed/ad1sKHRUBlw?si=LMgY3dMPAMKGqFCC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
          <iframe
            className="w-full h-[314px]"
            src="https://www.youtube.com/embed/AnqqBtKbs1A?si=DwcOUkx-ONdV8lHe"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fgenalyn.catarrojacriste%2Fvideos%2F1709418893209653%2F&show_text=false&t=0"
            className="w-full h-[250px] sm:h-[400px] md:h-[314px]"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
          <Link
            target="_blank"
            href={"https://nationallife.wistia.com/medias/osn0t7chyx"}
            className="w-full md:h-[314px]"
          >
            <Image
              src={AreYouReadyImage}
              alt="Are you redy"
              className="h-full w-full object-contain"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://nationallife.wistia.com/medias/omvlavz5en"}
            className="w-full md:h-[314px]"
          >
            <Image
              src={ReitrementReadinessImage}
              alt="Retirement Readiness"
              className="h-full w-full object-contain"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1">
          <iframe
            className="w-full h-[300px] md:h-[500px] xl:h-[600px]"
            src="https://www.youtube.com/embed/1-EtJQoKqOE?si=sTU_8ayszwAAS2cr"
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
