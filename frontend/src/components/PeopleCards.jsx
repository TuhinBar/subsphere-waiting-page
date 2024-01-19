import React from "react";
import SinglePeopleCard from "./SinglePeopleCard";

let singleSlides1 = [
  {
    logo: "https://i.imgur.com/ifsX0dh.png",
    name: "Sunny Bites",
    title: "Manager",
    review: "Excellent Support",
  },
  {
    logo: "https://i.imgur.com/1Eck93v.png",
    name: "Cozy Corner",
    title: "Owner",
    review: "Amazing UI",
  },
  {
    logo: "https://i.imgur.com/8idezNb.png",
    name: "Spice Haven",
    title: "CEO",
    review: "Prompt Service",
  },
  {
    logo: "https://i.imgur.com/rW4tzdi.png",
    name: "Green Delights",
    title: "Manager",
    review: "Great Experience",
  },
];

let singleSlides2 = [
  {
    logo: "https://i.imgur.com/0NgVfvB.png",
    name: "Brew Bliss",
    title: "CEO",
    review: "Easy to Use",
  },
  {
    logo: "https://i.imgur.com/wZNavKF.png",
    name: "Chill Spot",
    title: "Owner",
    review: "Fair Billing",
  },
  {
    logo: "https://i.imgur.com/UicKyl8.png",
    name: "Urban Grind",
    title: "Manager",
    review: "Quick Support",
  },
  {
    logo: "https://i.imgur.com/Hcnv42M.png",
    name: "Cocoa Cafe",
    title: "CEO",
    review: "Easy Onboarding",
  },
];

let singleSlides3 = [
  {
    logo: "https://i.imgur.com/o3xpk3V.png",
    name: "Serenity Spa",
    title: "Owner",
    review: "Cool UI",
  },
  {
    logo: "https://i.imgur.com/Ky5UBSm.png",
    name: "Wellness Oasis",
    title: "CEO",
    review: "Professional Teams",
  },
  {
    logo: "https://i.imgur.com/TebRISS.png",
    name: "Tranquil Retreat",
    title: "Manager",
    review: "Excellent services",
  },
  {
    logo: "https://i.imgur.com/4L1zBfT.png",
    name: "Harmony Haven",
    title: "Owner",
    review: "Top-notch Dashboard",
  },
];

let singleSlides4 = [
  {
    logo: "https://i.imgur.com/7goP3pr.png",
    name: "Sizzling Grill",
    title: "Owner",
    review: "Good Support",
  },
  {
    logo: "https://i.imgur.com/mw8gCO1.png",
    name: "Flavor Fusion",
    title: "CEO",
    review: "Unique Creations",
  },
  {
    logo: "https://i.imgur.com/LlgmjgG.png",
    name: "Urban Eats",
    title: "Manager",
    review: "100% Fair Billing",
  },
  {
    logo: "https://i.imgur.com/4COttri.png",
    name: "Vibe Store",
    title: "Owner",
    review: "We Recommend",
  },
];


const PeopleCards = () => {
  return (
    <div className="flex gap-2 justify-around ">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r to-transparent from-[#2a3037] transition-all duration-100"></div>
        <SinglePeopleCard peoples={singleSlides1} />
      </div>
      <SinglePeopleCard peoples={singleSlides2} />
      {/* <SinglePeopleCard peoples={singleSlides} /> */}
      <div className="hidden lg:block">
        <SinglePeopleCard peoples={singleSlides3} />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2a3037]"></div>
        <SinglePeopleCard peoples={singleSlides4} />
      </div>
    </div>
  );
};

export default PeopleCards;
