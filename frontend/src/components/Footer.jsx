import React from "react";
import { MdEmail } from "react-icons/md";
import { RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" h-full">
      <div className="flex md:justify-between lg:justify-evenly md:items-center md:gap-0 gap-8 flex-col md:flex-row px-12 md:px-0  pt-12 pb-8 ">
        <a href="/" className="flex items-center">
          {/* <img src="/LOGO.svg" alt="logo" className="w-12 3xl:w-20" />
                    <p className='text-white font-semibold text-xl'>Subsphere</p> */}
          <img
            src="https://i.imgur.com/vV5Zms2.png"
            className="w-56"
            alt="logo"
          />
        </a>
        <div className="text-white flex flex-col items-start gap-2">
          <h1 className="font-semibold text-white text-sm mb-2">Resources</h1>
          <button
            onClick={() => navigate("/blogs")}
            className="text-xs text-gray-500"
          >
            Blogs
          </button>
          <button
            onClick={() => {
              window.open(
                "https://thesubsphere.canny.io/feature-requests",
                "_blank"
              );
            }}
            className="text-xs text-gray-500"
          >
            Feature Request
          </button>
        </div>
        <div>
          <h1 className="text-white font-semibold text-sm mb-2">Contact</h1>
          <p className="text-xs text-gray-500">subsphere.business@gmail.com</p>
        </div>
        <div className="flex flex-col cursor-pointer ">
          <h1 className="text-white font-semibold text-sm mb-2">Socials</h1>
          <div className="flex gap-6">
            <MdEmail className="w-5 h-5 text-white opacity-55 hover:opacity-100 transition-all duration-200 ease-in-out" />
            <RiTwitterFill className="w-5 h-5 text-white opacity-55 hover:opacity-100 transition-all duration-200 ease-in-out" />
            <a href="https://www.linkedin.com/company/thesubsphere">
              <RiLinkedinFill className="w-5  h-5 text-white opacity-55 hover:opacity-100 transition-all duration-200 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-2   border-secondary border-t w-full md:w-2/4 mx-auto   ">
        <p className="text-white text-xs font-medium opacity-55">
          © 2024 Subsphere, FiNDiNG Matrix | All rights reserved.
        </p>
        <p className="text-white text-xs font-medium opacity-55">
          Building with love and a lot of passion ❤
        </p>
      </div>
    </div>
  );
};

export default Footer;
