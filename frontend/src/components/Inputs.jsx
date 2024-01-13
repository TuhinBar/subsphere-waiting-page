import React from "react";

const EmailInputs = () => {
  return (
    <div className="flex gap-4 mt-10 mx-auto items-center justify-center md:w-[90%] w-[95%] xl:w-[65%]">
      <input
        placeholder="your@email.com"
        className="border-2 border-light-secondary transition duration-500 text-light-secondary focus:placeholder-transparent bg-transparent rounded-2xl focus:outline-none p-2 w-[60%] md:pl-4"
      />
      <button className="font-semibold text-white bg-secondary rounded-2xl hover:bg-light-secondary transition-all duration-300 border-2 border-secondary hover:border-white p-2 hover:border-opacity-45 whitespace-nowrap md:px-5">
        Join Waitlist
      </button>
    </div>
  );
};

export default EmailInputs;
