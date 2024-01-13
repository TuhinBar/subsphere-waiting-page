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
          <img src="https://i.imgur.com/nQzVtee.png" alt="" />
        </div>

        <HeaderTags />

        <div className="right hidden lg:absolute lg:block right-2 translate-x-40  xl:opacity-25 md:opacity-10 z-40 ">
          <img src="https://i.imgur.com/7JDG3Nx.png" alt="" />
        </div>
      </div>
      <div className="">
        <Features />
      </div>
    </div>
  );
};

export default Home;
