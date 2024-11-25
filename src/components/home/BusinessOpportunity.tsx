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
      <div className="space-y-4">
        <h2 className="text-3xl font-bold pt-6">Living Benifits</h2>
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-base font-semibold">
                Jessica: Living Benefits
              </h2>
              <iframe
                className="w-full h-[314px]"
                src="https://www.youtube.com/embed/McNWKJIEVO4?si=C21GU2z5qwkt2yHz"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-base font-semibold">
                A Larger Purpose - Eric&#39;s Living Benefits Story
              </h2>
              <iframe
                className="w-full h-[314px]"
                src="https://www.youtube.com/embed/ad1sKHRUBlw?si=LMgY3dMPAMKGqFCC"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-base font-semibold">
                Living Benefits helped him in the fight against cancer
              </h2>
              <iframe
                className="w-full h-[314px]"
                src="https://www.youtube.com/embed/1-EtJQoKqOE?si=sTU_8ayszwAAS2cr"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-4">
              <h2 className="text-base font-semibold">
                &#39;She Will Be My Future&#39;: The Tran Family&#39;s Living
                Benefit Story
              </h2>
              <iframe
                className="w-full h-[314px]"
                src="https://www.youtube.com/embed/7oQhqmFNbwg?si=wx1BLXXeKF6eTm2x"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold pt-6">Retirement Benifits</h2>
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-base font-semibold">
              Are you overwhelmed by saving for retirement?
            </h2>
            <iframe
              className="w-full h-[314px]"
              src="https://www.youtube.com/embed/AnqqBtKbs1A?si=DwcOUkx-ONdV8lHe"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-bold">Retirement Risk Zone</h2>

            <Link
              target="_blank"
              href={"https://nationallife.wistia.com/medias/omvlavz5en"}
              className="w-full md:h-[320px]"
            >
              <Image
                src={ReitrementReadinessImage}
                alt="Retirement Readiness"
                className="h-full w-full object-contain"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 ">
          <div>
            <h2 className="text-base pt-3 font-bold">
              Guaranteed lifetime income rider {`(GLIR)`}
            </h2>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOpportunity;
