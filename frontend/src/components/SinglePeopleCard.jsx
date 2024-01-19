import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const SinglePeopleCard = ({ peoples, number }) => {
  let [hoveredItem, setHoveredItem] = useState(Math.floor(Math.random() * 4));
  return (
    <div className="flex flex-col gap-4">
      {peoples.map((people, index) => {
        return (
          <div
            className={`bg-gradient-to-t w-28 md:w-32 rounded-md p-2  cursor-pointer transition-all duration-1000 ${
              index === hoveredItem
                ? "from-[#2D333C] to-[#6A7380]"
                : "from-[#2D333C10] to-[#6A738010]"
            } `}
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
          >
            <div
              className={`flex flex-col items-center justify-center transition-all duration-1000 opacity-${
                index === hoveredItem ? 100 : 10
              } `}
            >
              <div className="w-12 h-12 rounded-full bg-white mt-2 relative">
                <img src={people.logo} alt="" />
                <span className="inline-block w-[10px] h-[10px] bg-green-300 absolute rounded-full top-1 -right-[1px] border-[1px] border-[#6A7380]"></span>
              </div>
              <p className="text-white font-semibold text-xs mt-3">
                {people.name}
              </p>
              <span className="text-gray-400 text-[8px] text-center">
                {people.title}
              </span>
              <p className="text-secondary text-[8px] flex items-center justify-center gap-1 font-semibold mt-2">
                <FaCircleCheck size={10} />
                {people.review}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SinglePeopleCard;

// this styling might just be slightly good lookin

// <div
// className={`flex flex-col items-center justify-center bg-gradient-to-t from-[#2D333C] to-[#6A7380] w-24 rounded-md p-2  cursor-pointer transition-all duration-1000 ${
//   index === hoveredItem ? "opacity-100" : "opacity-10"
// } `}
// key={index}
// onMouseEnter={() => setHoveredItem(index)}
// >
// <div className="w-12 h-12 rounded-full bg-white mt-2 relative">
//   <img src={people.logo} alt="" />
//   <span className="inline-block w-[10px] h-[10px] bg-green-300 absolute rounded-full top-1 -right-[1px] border-[1px] border-[#6A7380]"></span>
// </div>
// <p className="text-white font-semibold text-xs mt-3">
//   {people.name}
// </p>
// <span className="text-gray-400 text-[8px] text-center">
//   {people.title}
// </span>
// <p className="text-secondary text-[8px] flex items-center justify-center gap-1 font-semibold mt-2">
//   <FaCircleCheck size={10} />
//   {people.review}
// </p>
// </div>
