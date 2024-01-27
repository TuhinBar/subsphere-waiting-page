import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center  md:px-8 px-6 py-6">
        <img src="/LOGO.svg" className="w-8 md:w-12" alt="logo" />
        <button
          onClick={() => navigate("/")}
          className="relative font-semibold text-xs md:text-sm text-white bg-secondary rounded-2xl hover:bg-light-secondary transition-all duration-300 border-2 border-secondary hover:border-white p-2 hover:border-opacity-45 whitespace-nowrap  cursor-pointer"
        >
          Join Now
        </button>
      </div>

      <div className="text-white">
        <img
          src="https://i.imgur.com/IGBjds7.jpg"
          className="w-[90%] my-8 lg:w-[60%] rounded-lg mx-auto"
          alt="blogimage"
        />

        <h1 className="text-xl md:text-2xl font-bold w-[90%] lg:w-2/4 mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </h1>
      </div>
    </>
  );
};

export default BlogPage;
