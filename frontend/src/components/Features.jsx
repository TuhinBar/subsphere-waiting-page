import React from "react";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { FiVideo } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";

import SingleFeaturecard from "./SingleFeaturecard";
import PeopleCards from "./PeopleCards";

let features = [
  {
    name: "Search and find experts",
    desc: "Over 30 business categories to choose from",
    icon: <PiPersonArmsSpreadLight className="w-7 h-7 text-blue-400" />,
  },
  {
    name: "Message experts directly",
    desc: "Ask a question and get advice through mobile chat",
    icon: (
      <HiOutlineChatBubbleBottomCenterText className="w-7 h-7 text-red-400" />
    ),
  },
  {
    name: "Quick tips from experts",
    desc: "See your guide's top tips and advice",
    icon: <FiVideo className="w-7 h-7 text-yellow-400" />,
  },
  {
    name: "Pay as you go",
    desc: "Pay for the time you need, no subscription required",
    icon: <AiOutlineDollar className="w-7 h-7 text-purple-400" />,
  },
  {
    name: "24/7 Customer service",
    desc: "We're here to help. Contact us anytime",
    icon: <RiCustomerServiceLine className="w-7 h-7 text-green-400" />,
  },
  {
    name: "Regular Offers & Discounts",
    desc: "Get regular offers and discounts on your bookings",
    icon: <MdOutlineLocalOffer className="w-7 h-7 text-pink-400" />,
  },
];

const Features = () => {
  return (
    <div className="flex lg:flex-row flex-col mt-6 lg:-mt-[1rem] 2xl:-mt-20 3xl:-mt-40 w-full lg:w-[80%] p-4 mx-auto bg-[#2a3037] rounded-md mb-12 px-8">
      <div className="">
        <p className="font-semibold text-3xl text-white">How it works</p>
        <p className="text-white text-xs font-medium mt-2 mb-4">
          We make it easy to build and manage membership program for your
          business{" "}
        </p>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="flex flex-wrap w-[100%] lg:w-[50%] gap-y-12 gap-x-4 h-full justify-around min-w-0 ">
            {features.map((feature, index) => (
              <SingleFeaturecard feature={feature} index={index} />
            ))}
          </div>
          <div className="w-[100%] lg:w-[50%] ">
            <PeopleCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
