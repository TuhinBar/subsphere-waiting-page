import React from "react";

const EmailInputs = () => {
  return (
    <div className="flex gap-4 mt-10 mx-auto items-center justify-center md:w-[90%] w-[95%] xl:w-[65%]">
      <input
        placeholder="your@email.com"
        className="border-2 border-light-secondary transition duration-500 text-light-secondary focus:placeholder-transparent bg-transparent rounded-2xl focus:outline-none p-2 w-[60%] md:pl-4"
      />
      <div className="relative font-semibold text-white bg-secondary rounded-2xl hover:bg-light-secondary transition-all duration-300 border-2 border-secondary hover:border-white p-2 hover:border-opacity-45 whitespace-nowrap md:px-5 cursor-pointer">
        
      <img
        src="https://i.imgur.com/BL6mFmK.png"
        alt=""
        className="absolute md:-top-[330%] md:left-24  md:rotate-[40deg] 3xl:rotate-0 lg:rotate-[30deg] -top-[250%] left-6 lg:left-8 scale-[70%] md:scale-[65%] xl:scale-80 3xl:scale-90 3xl:-left-2"
      />
        Join Waitlist
      </div>
    </div>
  );
};

export default EmailInputs;
