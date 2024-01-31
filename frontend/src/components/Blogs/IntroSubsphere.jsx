import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogsHeader from "./BlogsHeader";

const IntroductionToSubsphere = () => {
  useEffect(() => {
    // Smooth scroll to the top of the page when the component is mounted
    const scrollToTop = () => {
      const element = document.documentElement;
      element.scrollIntoView({ behavior: "smooth" });
    };

    scrollToTop();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 w-[95%] md:w-[70%] text-slate-500">
        <BlogsHeader
          writer={"Tuhin Bar"}
          publishedOn={"31st Jan, 2024"}
          duration={"2 minutes"}
          category={["business", "subscription", "billing", "subsphere"]}
          title={
            "Introduction to SubSphere: The Subscription Management Platform for Businesses"
          }
          image={"https://i.imgur.com/IrEdkVt.jpeg"}
          writerProfile={"https://www.linkedin.com/in/tuhin-bar"}
        />

        <section className="mb-8 ">
          <img
            src="https://i.imgur.com/HAhVhCa.jpeg"
            alt="header"
            className="rounded-md w-full md:w-3/4 mx-auto opacity-85"
          />
        </section>

        <section className="mb-8">
          <p className="text-gray-300 leading-8">
            Nowadays memberships are a must for growing businesses whether you
            are a salon or a restaurant. Memberships or subscription plans allow
            a business to enable the option to have more recurring customers and
            revenue. However, managing all these kinds of stuff can be a bit
            hectic for many businesses as they have to focus on other business
            operations. That’s where SubSphere comes into play. SubSphere can
            help you create, manage, and monitor subscriptions or memberships
            for your business. Let’s take a brief look at the whole membership
            management in business and how SubSphere can accelerate your
            business’s growth.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Why membership and subscription is important for a Business?
          </h2>
          <p className="text-gray-300 leading-8">
            According to{" "}
            <a
              href="https://www.marketsandmarkets.com/Market-Reports/subscription-billing-management-market-199100709.html"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              marketsandmarkets
            </a>{" "}
            the{" "}
            <b className="text-primary">Subscription and Billing Management</b>{" "}
            market is going to grow from{" "}
            <b className="text-primary">
              4 Billion USD to 8 Billion USD by 2025
            </b>
            . Currently, almost every salon, cafe, restaurant, bookstore, gym,
            and bar has a membership system to keep their customers attached to
            their businesses, and if your business does not have one you are
            missing a big opportunity to grow your business and reach potential
            customers. But, do not worry as SubSphere is the only platform you
            need to create your subscription system or manage if you already
            have a plan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            How SubSphere can help you to grow your business?
          </h2>
          <p className="text-gray-300 leading-8">
            <p className="text-xl mt-2 font-semibold">
              Customizable Subscription Management
            </p>
            <p className="mt-2">
              SubSphere allows you to create a fully customized subscription
              tier for your customers. You can add various offers and discounts
              for your products or services on different subscription tiers.
              Users can explore your business and subscription tiers on the
              SubSphere App. You will also get a CRM dashboard for better
              engagement with your customers. You can read about all the
              features here.
            </p>{" "}
            <p className="text-xl mt-2 font-semibold">Billing Management</p>
            <p className="mt-2">
              With SubSphere you can now handle your billings very easily. The
              billing system is also fully customizable. You can create your
              billing types as per your business needs. You can create discounts
              and offers for your members on the billing system. You will get a
              personalized dashboard with the billing system to track and
              calculate your sales and revenue.
            </p>
            <p className="text-xl mt-2 font-semibold">Security</p>{" "}
            <p className="mt-2">
              All these features come with a fully secured application that will
              not ask for any personal data about your business and all the
              transactions will be made through secure gateways.
            </p>
          </p>
          <p className="text-gray-300 leading-8 mt-4">
            So all these and many more coming with the revolutionary SubSphere.
            Looking forward to converting your customers to members. Stay tuned
            for more.
          </p>
        </section>

        <section className="mb-8">
          <p className="font-medium mt-4 text-white">
            Ready to dive into the subscription revolution? Join the waitlist
            now and let's navigate this future together.{" "}
            <span
              className="text-secondary cursor-pointer hover:underline"
              onClick={() => {
                window.open("https://waitlist.thesubsphere.com/", "_blank");
              }}
            >
              SignUp Now
            </span>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default IntroductionToSubsphere;
