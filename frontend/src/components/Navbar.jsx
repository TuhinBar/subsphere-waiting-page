import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center  md:px-8 px-6 py-6">
      <a href="/">
        <img src="/LOGO.svg" className="w-8 md:w-12" alt="logo" />
      </a>
      <button
        onClick={() => navigate("/")}
        className="relative font-semibold text-xs md:text-sm text-white bg-secondary rounded-2xl hover:bg-light-secondary transition-all duration-300 border-2 border-secondary hover:border-white p-2 hover:border-opacity-45 whitespace-nowrap  cursor-pointer"
      >
        Join Now
      </button>
    </div>
  );
};

export default Navbar;
