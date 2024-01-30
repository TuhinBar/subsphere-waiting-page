import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const BlogPage = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
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
