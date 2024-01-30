import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogContents = [
  {
    id: 1,
    Date: "19 Jan,2024",
    Time: "5 min read",
    Title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    Content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci laboriosam ad explicabo veniam quisquam? Est nemo, molestiae quod quis accusantium distinctio dolor neque reiciendis eveniet veritatis. Provident nobis quos laudantium  neque reiciendis eveniet veritatis. Provident nobis quos laudantium.",
    Image: "https://i.imgur.com/IGBjds7.jpg",
  },
  {
    id: 2,
    Date: "20 Jan,2024",
    Time: "7 min read",
    Title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    Content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci laboriosam ad explicabo veniam quisquam? Est nemo, molestiae quod quis accusantium distinctio dolor neque reiciendis eveniet veritatis. Provident nobis quos laudantium  neque reiciendis eveniet veritatis. Provident nobis quos laudantium.",
    Image: "https://i.imgur.com/IGBjds7.jpg",
  },
  {
    id: 3,
    Date: "21 Jan,2024",
    Time: "10 min read",
    Title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    Content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci laboriosam ad explicabo veniam quisquam? Est nemo, molestiae quod quis accusantium distinctio dolor neque reiciendis eveniet veritatis. Provident nobis quos laudantium  neque reiciendis eveniet veritatis. Provident nobis quos laudantium.",
    Image: "https://i.imgur.com/IGBjds7.jpg",
  },
  {
    id: 4,
    Date: "22 Jan,2024",
    Time: "10 min read",
    Title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    Content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci laboriosam ad explicabo veniam quisquam? Est nemo, molestiae quod quis accusantium distinctio dolor neque reiciendis eveniet veritatis. Provident nobis quos laudantium  neque reiciendis eveniet veritatis. Provident nobis quos laudantium.",
    Image: "https://i.imgur.com/IGBjds7.jpg",
  },
  {
    id: 5,
    Date: "23 Jan,2024",
    Time: "10 min read",
    Title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    Content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci laboriosam ad explicabo veniam quisquam? Est nemo, molestiae quod quis accusantium distinctio dolor neque reiciendis eveniet veritatis. Provident nobis quos laudantium  neque reiciendis eveniet veritatis. Provident nobis quos laudantium.",
    Image: "https://i.imgur.com/IGBjds7.jpg",
  },
];

const BlogCards = () => {
  return (
    <section className="mb-20">
      {BlogContents.map((item, index) => {
        return (
          <Link
            to={`/blogs/${item.id}`}
            key={index}
            className="text-white w-[90%] mx-auto rounded-lg p-8 flex gap-2 bg-[#2f353c] cursor-pointer mt-6"
          >
            <div className="p-0 lg:pr-8">
              <div className="flex justify-between py-4 gap-4">
                <div className="flex gap-2 items-center">
                  <MdDateRange />
                  <p className="text-sm">{item.Date}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <IoBookOutline />
                  <p className="text-sm">{item.Time}</p>
                </div>
              </div>
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                {item.Title}
              </h1>
              <p className="text-justify text-gray-400">
                {`${item.Content}`.substring(0, 230) + "..."}
              </p>
            </div>
            <img
              src={item.Image}
              className="w-64 object-cover hidden lg:block rounded-xl"
              alt="blogimg"
            />
          </Link>
        );
      })}
    </section>
  );
};

export default BlogCards;
