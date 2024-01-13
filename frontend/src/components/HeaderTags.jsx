import React from "react";
import EmailInputs from "./Inputs";

const HeaderTags = () => {
  return (
    <div className="flex gap-2 items-center justify-center flex-col md:gap-4 m-auto w-full p-4 md:p-0 md:w-[70%] relative ">
      <img src="/LOGO.svg" className="w-24 3xl:w-28" alt="" />
      <p className="text-secondary md:text-xl sm:text-lg text-sm mb-2 md:mb-0">
        Subsphere Awaits You!
      </p>
      <p className="md:text-5xl sm:text-3xl text-2xl text-white font-bold w-full text-center px-4 md:px-0 ">
        Experience Seamless
      </p>
      <p className="md:text-5xl sm:text-3xl text-2xl text-white font-bold w-full text-center px-4 md:px-0">
        Membership Control
      </p>
      <p className="md:text-5xl sm:text-3xl text-2xl text-white font-bold w-full text-center px-4 md:px-0 relative">
        With{" "}
        <span className="relative inline-block">
          Subsphere
          <img
            src="https://i.imgur.com/XDqq3zI.png"
            alt=""
            className="absolute top-[1px] scale-[110%] "
          />
        </span>
      </p>

      <EmailInputs />
      <p className="text-white text-center text-sm md:text-md mt-2 md:mb-0  font-medium">
        Fuel Your Growth, Elevate Your Memberships – Let Us Drive Success for
        Your Business :)
      </p>
      <p className="mt-4 text-center md:text-xl text-[17px] text-white">
        Already
        <span className="text-6xl md:text-8xl font-number text-primary relative inline-block mr-4">
          {`42`}
          <img
            src="https://i.imgur.com/8f8BuMy.png"
            alt=""
            className="absolute w-18 left-2 md:top-20 top-[50px]"
          />
        </span>
        businesses are anticipating the launch!
      </p>
    </div>
  );
};

export default HeaderTags;
