import React from "react";

import { FiVideo } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import {
  MdPeople,
  MdDashboardCustomize,
  MdBusiness,
  MdCardMembership,
} from "react-icons/md";

import SingleFeaturecard from "./SingleFeaturecard";
import PeopleCards from "./PeopleCards";

let features = [
  {
    name: "Subscription Management",
    desc: "Optimize subscriptions and membership with intuitive tools.",
    icon: <MdPeople className="w-7 h-7 text-red-400" />,
  },
  {
    name: "Business Registration",
    desc: "Effortless onboarding for efficient membership management",
    icon: <MdBusiness className="w-7 h-7 text-blue-400" />,
  },
  {
    name: "CRM Integration",
    desc: "Build lasting connections with members using our CRM",
    icon: <MdCardMembership className="w-7 h-7 text-yellow-400" />,
  },
  {
    name: "Flexible Billing",
    desc: "Customize billing categories for financial alignment",
    icon: <AiOutlineDollar className="w-7 h-7 text-purple-400" />,
  },
  {
    name: "Comprehensive Dashboard",
    desc: "Real-time overview for informed business decisions.",
    icon: <MdDashboardCustomize className="w-7 h-7 text-pink-400" />,
  },
  {
    name: "24/7 Customer Support",
    desc: "Dedicated team for round-the-clock assistance.",
    icon: <RiCustomerServiceLine className="w-7 h-7 text-green-400" />,
  },
];

const Features = () => {
  return (
    <div className="flex lg:flex-row flex-col mt-6 lg:-mt-[1rem] 2xl:-mt-20 3xl:-mt-40 w-full lg:w-[80%] p-4 mx-auto bg-[#2a3037] rounded-md mb-12 px-8">
      <div className="">
        <p className="font-semibold text-3xl text-white">
          What we are offering
        </p>
        <p className="text-white text-xs font-medium mt-2 mb-4">
          We make it easy to build and manage{" "}
          <span className="text-primary">membership program</span> for your
          business{" "}
        </p>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="flex flex-wrap w-[100%] lg:w-[50%] gap-y-12 gap-x-4 h-full justify-around min-w-0 ">
            {features.map((feature, index) => (
              <SingleFeaturecard feature={feature} index={index} key={index} />
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
