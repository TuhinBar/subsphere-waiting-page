import React from "react";
import Features from "../../components/Features";
import FloatingIcons from "../../components/FloatingIcons";
import Footer from "../../components/Footer";
import HeaderTags from "../../components/HeaderTags";

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
      <Footer />
    </div>
  );
};

export default Home;
