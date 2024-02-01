import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogsHeader from "./BlogsHeader";

const TrendsInSubscription = () => {
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
          writer={"Arian Shaikh"}
          publishedOn={"30th Jan, 2024"}
          duration={"2 minutes"}
          category={["business", "subscription", "trends", "subsphere"]}
          title={"Navigating the Future: Trends in Subscription Based Models"}
          image={"https://i.imgur.com/bOhO3Ug.jpeg"}
          writerProfile={"https://www.linkedin.com/in/arian-shaikh-3b679b240/"}
        />

        <section className="mb-8 ">
          <img
            src="https://i.imgur.com/cxwwHdy.jpeg"
            alt="header"
            className="rounded-md w-full md:w-3/4 mx-auto opacity-85"
          />
        </section>

        <section className="mb-8">
          <p className="text-gray-300 leading-8">
            Hey there! Ever noticed how you can get cool stuff without actually
            owning it? It's all thanks to subscription services, and they're
            taking over the scene in many industries. From movies to food
            deliveries, people are loving the idea of using things without
            owning them. Businesses are catching on and gaining big benefits by
            offering subscription services. Let's explore this world and see how
            SubSphere is making it even better for companies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Everybody Loves Subscriptions
          </h2>
          <p className="text-gray-300 leading-8">
            The way people buy things is changing. Instead of owning stuff, they
            prefer to use things with subscriptions. Whether it's watching
            movies or getting food delivered, subscriptions are making life
            easier. Businesses that offer subscriptions are winning big by
            keeping customers happy and making more money.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Personalization and Customization
          </h2>
          <p className="text-gray-300 leading-8">
            We all can agree upon that everything a business adopts is
            ultimately for its consumer to have a better experience with the
            brand. Consumers love personalized subscription experiences tailored
            to their unique tastes.
          </p>
          <p className="text-gray-300 leading-8">
            There comes The SubSphere, it’s like a personalized genie for
            businesses, the SubSphere can manage, maintain, and craft
            subscription offerings for your members.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Hybrid Models</h2>
          <p className="text-gray-300 leading-8">
            Businesses are also exploring and embracing hybrid models for their
            business, combining one-time purchase models with subscription
            options. This option can highly be a game changer with proper
            management and balance; regular consumers can be turned into paying
            members who can create another stream of revenues for businesses.
            SubSphere has the vision to streamline this transition exactly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Engaging Customer Relation
          </h2>
          <p className="text-gray-300 leading-8">
            Building a subscription and membership model for your business would
            enhance your customer engagement which will go beyond transactions
            and will foster ongoing relationships. Exclusive perks and offers
            for your members would help you grow a loyal community of your
            regular consumers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Predictive Analysis
          </h2>
          <p className="text-gray-300 leading-8">
            Predictive analytics and visually represented data about your
            business and your customers enhance your overall understanding of
            your consumers and help you cater to any particular trend that your
            consumers are often looking for. Well, SubSphere? it's not just a
            platform; it's your data whisperer, offering insights that give
            businesses the edge in this data-driven world. SubSphere offers a
            fully customized and detailed dashboard about your members and helps
            you draw the trend for your business.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Membership Loyalty Programs
          </h2>
          <p className="text-gray-300 leading-8">
            Who doesn't love a loyalty perk? Dive into the trend of businesses
            keeping customers close with membership and loyalty programs.
            Spoiler alert: SubSphere turns loyalty into an art form, helping
            businesses retain their VIPs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Let's wrap it!</h2>
          <p className="text-gray-300 leading-8">
            As businesses navigate the dynamic landscape of subscription-based
            models, SubSphere stands as a versatile solution, empowering
            enterprises to not only keep pace with trends but also stay ahead in
            the subscription economy. Explore the possibilities with SubSphere
            and embrace the future of subscription services.
          </p>
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

export default TrendsInSubscription;
