import React from "react";
import HeaderTags from "../../components/HeaderTags";
import Features from "../../components/Features";
import FloatingIcons from "../../components/FloatingIcons";
import { RiLinkedinFill, RiMailFill, RiTwitterFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
<<<<<<< HEAD
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
=======
import Modal from "../../components/Modal";
>>>>>>> 5a62115b83efa9590b707c426baffc9c5b64637b

const Home = () => {
  return (
    <div className="relative">
      {/* <Modal /> */}
      <FloatingIcons />
      <div className="flex justify-between h-full md:h-screen relative overflow-x-hidden mb-16">
        <div className="left hidden lg:absolute lg:block left-2 -translate-x-40  xl:opacity-25 md:opacity-10 ">
          <img
            className="w-[85%] 3xl:w-full"
            src="https://i.imgur.com/nQzVtee.png"
            alt=""
          />
        </div>

        <HeaderTags />

        <div className="right hidden lg:absolute lg:block -right-16 3xl:right-2 translate-x-40  xl:opacity-25 md:opacity-10 z-40 ">
          <img
            className="w-[85%] 3xl:w-full"
            src="https://i.imgur.com/7JDG3Nx.png"
            alt=""
          />
        </div>
      </div>
      <div className="">
        <Features />
      </div>
      <div className="footer ">
        <div className="flex flex-col items-center justify-center gap-2 p-2 border-t border-secondary ">
          <div className="flex gap-2 cursor-pointer ">
            <MdEmail className="w-5 h-5 text-white opacity-55 hover:opacity-100 transition-all duration-200 ease-in-out" />
            <FaXTwitter className="w-5 h-5 text-white opacity-55 hover:opacity-100 transition-all duration-200 ease-in-out" />
            <RiLinkedinFill className="w-5 h-5 text-white opacity-55 hover:opacity-100 transition-all duration-200 ease-in-out" />
          </div>
          <p className="text-white text-xs font-medium opacity-55">
            © 2023 Subsphere, FiNDiNG Matrix. All rights reserved.
          </p>
          <p className="text-white text-xs font-medium opacity-55">
            Building with love and a lot of passion ❤
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
