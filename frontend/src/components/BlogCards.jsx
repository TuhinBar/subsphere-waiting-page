import React, { useEffect } from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogContents = [
  {
    id: 1,
    date: "30 Jan, 2024",
    time: "2 min read",
    title: "Navigating the Future: Trends in Subscription Based Models",
    content:
      "Hey there! Ever noticed how you can get cool stuff without actually owning it? It's all thanks to subscription services, and they're taking over the scene in many industries. From movies to food deliveries, people are loving the idea of using things without owning them. Businesses are catching on and gaining big benefits by offering subscription services. Let's explore this world and see how SubSphere is making it even better for companies.",
    image: "https://i.imgur.com/cxwwHdy.jpeg",
    key: "trends-in-subscription",
  },
  {
    id: 2,
    key: "introduction-to-subsphere",
    date: "31 Jan, 2024",
    time: "2 min read",
    title:
      "Introduction to SubSphere: The Subscription Management Platform for Businesses",
    content:
      "Nowadays memberships are a must for growing businesses whether you are a salon or a restaurant. Memberships or subscription plans allow a business to enable the option to have more recurring customers and revenue. However, managing all these kinds of stuff can be a bit hectic for many businesses as they have to focus on other business operations. That’s where SubSphere comes into play",
    image: "https://i.imgur.com/HAhVhCa.jpeg",
  },
  {
    id: 3,
    date: "31 Jan, 2024",
    time: "2 min read",
    title:
      "Exploring SubSphere: Your Guide to How It Works and What We Bring to the Table.",
    content:
      "Welcome to SubSphere, where subscription management meets simplicity! If you've been wondering what SubSphere is all about and how it can benefit your business, you're in the right place. Let's take a tour of the workings of SubSphere and uncover what we're offering.",
    image: "https://i.imgur.com/DP7P8tv.png",
    key: "what-subsphere-offering",
  },
  {
    id: 4,
    date: "01 Frb,2024",
    time: "5 min read",
    title: "Future of subscription services",
    content:
      "Every business owner wants their business to grow. For this, they try to introduce various lucrative offers for customers or they try to engage with them more to have a great healthy customer relationship. Subscrip[tion services plays a crucial role here. Without a subscription or membership, you cannot make your customers feel connected. Other than that the recurring customer rate increases this way. So we can say other than marketing and stuff, membership is one of the most important for businesses like cafes, restaurants, salons, pubs, bookstores, and many more",
    image: "https://i.imgur.com/UqysV1q.jpeg",
    key: "future-of-subscription",
  },
  {
    id: 5,
    date: "23 Jan,2024",
    time: "10 min read",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci laboriosam ad explicabo veniam quisquam? Est nemo, molestiae quod quis accusantium distinctio dolor neque reiciendis eveniet veritatis. Provident nobis quos laudantium  neque reiciendis eveniet veritatis. Provident nobis quos laudantium.",
    image: "https://i.imgur.com/IGBjds7.jpg",
  },
];

const BlogCards = () => {
  useEffect(() => {
    // Smooth scroll to the top of the page when the component is mounted
    const scrollToTop = () => {
      const element = document.documentElement;
      element.scrollIntoView({ behavior: "smooth" });
    };

    scrollToTop();
  }, []);
  return (
    <section className="mb-20">
      {BlogContents.map((item, index) => {
        return (
          <Link
            to={`/blogs/${item?.key}`}
            key={index}
            className="text-white w-[90%] mx-auto rounded-lg p-8 flex gap-2 bg-[#2f353c] cursor-pointer mt-6"
          >
            <div className="p-0 lg:pr-8">
              <div className="flex justify-between py-4 gap-4">
                <div className="flex gap-2 items-center">
                  <MdDateRange />
                  <p className="text-sm">{item.date}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <IoBookOutline />
                  <p className="text-sm">{item.time}</p>
                </div>
              </div>
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                {item.title}
              </h1>
              <p className="text-justify text-gray-400">
                {`${item.content}`.substring(0, 230) + "..."}
              </p>
            </div>
            <img
              src={item.image}
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
