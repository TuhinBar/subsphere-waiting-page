import React from "react";
import { FaClock } from "react-icons/fa6";

function BlogsHeader({
  title,
  publishedOn,
  duration,
  category,
  writer,
  image,
  writerProfile,
}) {
  return (
    <div className="blogs-header border border-primary px-4 md:px-8 py-4 mb-8 rounded-md text-white shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
      <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-8 mt-8 text-white">
        <div className="flex gap-2 items-center ">
          <div>
            <img src={image} alt="writer" className="rounded-full w-9 h-9" />
          </div>
          <div className="text-xs">
            <p className="">{publishedOn}</p>
            <p
              className="cursor-pointer hover:font-medium"
              onClick={() => {
                window.open(writerProfile, "_blank");
              }}
            >
              {writer}
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col items-start md:items-end">
          <p className="text-xs flex gap-2 items-center">
            <FaClock size={12} /> {duration} read
          </p>
          <div className="text-xs flex gap-2 items-center flex-wrap">
            {category.map((item, index) => {
              return (
                <span
                  key={index}
                  className="bg-primary shadow-sm px-2 py-1 rounded-md"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsHeader;
