import React from "react";
import BlogCards from "../../components/BlogCards";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Blogs = () => {
  return (
    <section className="flex-col flex">
      <Navbar />
      <div className="m-auto p-16  md:pb-32 md:pt-20">
        <h1 className="text-white text-4xl md:text-6xl font-semibold">Blogs</h1>
      </div>
      <BlogCards />
      <Footer />
    </section>
  );
};

export default Blogs;
