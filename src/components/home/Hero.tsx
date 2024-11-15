import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[url('/home-hero-bg.jpeg')] h-[280px] w-full bg-no-repeat bg-cover bg-center relative">
      <div className="bg-black bg-opacity-40 absolute top-0 left-0 w-full  h-full  text-white flex flex-col justify-center  ">
        <div className="container">
          <h2 className="text-3xl font-black pb-4 ">
            {" "}
            Villacorta Insurance Services
          </h2>
          <div className="max-w-[550px]  ">
            <p>LIC. California Agent #0L99919</p>
            <p>Also licensed in Different States.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
