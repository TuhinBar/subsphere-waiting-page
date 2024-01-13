import React from "react";
import HeaderTags from "../../components/HeaderTags";
import Features from "../../components/Features";
import FloatingIcons from "../../components/FloatingIcons";

const Home = () => {
  return (
    <div className="relative">
      <FloatingIcons />
      <div className="flex justify-between h-screen relative overflow-x-hidden">
        <div className="left hidden lg:absolute lg:block left-2 -translate-x-40  xl:opacity-25 md:opacity-10 ">
          <img className="w-[85%] 3xl:w-full" src="https://i.imgur.com/nQzVtee.png" alt="" />
        </div>

        <HeaderTags />

        <div className="right hidden lg:absolute lg:block -right-16 3xl:right-2 translate-x-40  xl:opacity-25 md:opacity-10 z-40 ">
          <img className="w-[85%] 3xl:w-full" src="https://i.imgur.com/7JDG3Nx.png" alt="" />
        </div>
      </div>
      <div className="">
        <Features />
      </div>
      <div className="footer opacity-55">
        <div className="flex flex-col items-center justify-center gap-2 p-2 border-t border-secondary ">
          <p className="text-white text-xs font-medium">
            © 2023 Subsphere, FiNDiNG Matrix. All rights reserved.
          </p>
          <p className="text-white text-xs font-medium">
            Building with love and a lot of passion ❤
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
