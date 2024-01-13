import React from "react";
import SinglePeopleCard from "./SinglePeopleCard";

let singleSlides = [
  {
    logo: "https://i.imgur.com/1Eck93v.png",
    name: "John Doe",
    title: "CEO, ABC Company",
    review: "Very good, i sex",
  },
  {
    logo: "https://i.imgur.com/1Eck93v.png",
    name: "John Doe",
    title: "CEO, ABC Company",
    review: "Very good, i sex",
  },
  {
    logo: "https://i.imgur.com/1Eck93v.png",
    name: "John Doe",
    title: "CEO, ABC Company",
    review: "Very good, i sex",
  },
  {
    logo: "https://i.imgur.com/1Eck93v.png",
    name: "John Doe",
    title: "CEO, ABC Company",
    review: "Very good, i sex",
  },
];

const PeopleCards = () => {
  return (
    <div className="flex gap-2 justify-around ">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r to-transparent from-[#2a3037] transition-all duration-100"></div>
        <SinglePeopleCard peoples={singleSlides} />
      </div>
      <SinglePeopleCard peoples={singleSlides} />
      {/* <SinglePeopleCard peoples={singleSlides} /> */}
      <div className="hidden lg:block">
        <SinglePeopleCard peoples={singleSlides} />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2a3037]"></div>
        <SinglePeopleCard peoples={singleSlides} />
      </div>
    </div>
  );
};

export default PeopleCards;
