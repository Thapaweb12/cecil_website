import { ProfileImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import ShareButton from "./ShareButton";
import CustomButton from "../common/CustomButton";

type Props = {};

const DigitalCard = (props: Props) => {
  return (
    <div className="mx-auto max-w-[340px] w-full flex flex-col items-center justify-center gap-y-6 ">
      <div className="w-[240px] flex-shrink-0 h-[320px] relative ">
        <Image
          src={ProfileImage}
          alt="Profile Image"
          className="w-full h-full"
        />
        <ShareButton />
      </div>
      <div className="w-full flex-shrink-0 max-w-[270px]">
        <h1 className="text-[26px] font-bold text-center">
          Cecile M. Villacorta
        </h1>
        <div className="text-xs ">
          <p className="text-center py-2">Qualified Field Director - PFA</p>

          <p className="leading-5">
            Entrepreneur, Specializing in Life Insurance with Living Benefits,
            Insurance Professional Team Builder
          </p>
          <p className="mt-1">LIC. California #0L99919</p>
        </div>
      </div>

      <a href="/Cecile-M.-Villacorta.vcf" download={"Cecile M. Villacorta.vcf"}>
        <CustomButton className="text-sm font-semibold  w-[200px]">
          Add to contact
        </CustomButton>
      </a>
    </div>
  );
};

export default DigitalCard;
