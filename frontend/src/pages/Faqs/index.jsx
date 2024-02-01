import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import FaqCard from "../../components/FaqCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Faqs = () => {
  const faqNavList = ["Get Started", "Help & SUpport"];
  const faqCardData = [
    {
      name: [
        {
          question: "What is SubSphere, and how does it work ?",
          answer: `SubSphere is a subscription management platform designed to help businesses streamline their subscription processes. It provides a centralized hub for businesses to manage memberships, subscriptions, and offers. For a detailed explanation read our blogs.`,
        },
        {
          question: "How can SubSphere benefit my business?",
          answer:
            "SubSphere offers numerous benefits, including simplified subscription management, increased customer engagement, and streamlined billing processes. It helps businesses of all sizes enhance their subscription services and improve overall operational efficiency.",
        },
        {
          question: "Is SubSphere suitable for businesses of all sizes?",
          answer:
            "Yes, SubSphere is designed to be scalable and adaptable for businesses of all sizes. Whether you're a small cafe or a larger enterprise, SubSphere can cater to your unique subscription needs.",
        },
        {
          question: "What industries does SubSphere cater to?",
          answer:
            " SubSphere is versatile and caters to various industries such as restaurants, salons, cafes, and more. Its flexible features make it suitable for a wide range of businesses offering subscription services.",
        },
        {
          question: "Is SubSphere compatible with existing software and tools?",
          answer:
            "Yes, SubSphere is designed with integration in mind. It can seamlessly integrate with other business tools, enhancing your workflow and ensuring a smooth experience across various aspects of your operations.",
        },
        {
          question:
            "How can businesses promote their subscriptions on SubSphere?",
          answer:
            "SubSphere provides features for businesses to easily showcase and promote their subscriptions. From exclusive offers to personalized promotions, our platform empowers businesses to attract and retain subscribers effectively.",
        },
      ],
    },
    {
      name: [
        {
          question: " What kind of customer support does SubSphere offer?",
          answer:
            "SubSphere is proud to offer dedicated customer support. Our team of real people is here to assist businesses with any questions or concerns. You can reach out to our support team via email: support@thesubsphere.com",
        },
        {
          question: "Is there a trial period for SubSphere?",
          answer:
            " Yes, we understand the importance of trying before committing. SubSphere will be offering a trial period for businesses to explore the platform, experience its features, and assess how it aligns with their needs.",
        },
      ],
    },
  ];

  const [faqNavOn, setFaqNavOn] = useState(0);
  const [faqDataState, setFaqDataState] = useState(0);
  const [isSecondDivVisible, setIsSecondDivVisible] = useState(true);
  const faqCardRef = useRef(null);

  const handleFaqClick = (index) => {
    setFaqNavOn(index);
    setFaqDataState(index);
    setIsSecondDivVisible(false);
    setTimeout(() => {
      setIsSecondDivVisible(true);
    }, 300);
  };

  return (
    <section className="flex flex-col">
      <Navbar />
      <div className="m-auto p-16 md:pb-32 md:pt-20">
        <h1 className="text-white text-4xl md:text-6xl font-semibold">FAQs</h1>
      </div>

      <div className="max-w-3xl m-auto md:mb-20 ">
        <div className="z-40 relative flex justify-center overflow-hidden">
          <ul className="w-11/12 justify-items-start self-auto flex items-center scrollbar-hidden overflow-auto gap-10">
            {faqNavList?.map((faq, index) => {
              return (
                <li
                  onClick={() => handleFaqClick(index)}
                  className={`cursor-pointer w-full whitespace-nowrap text-center scrollbar-hidden p-2 lg:px-0 ${
                    index === faqNavOn
                      ? " border-[1px] border-[#3B3B40] rounded-lg text-primary "
                      : "text-white"
                  }`}
                  key={index}
                >
                  {faq}
                </li>
              );
            })}
          </ul>
        </div>
        <AnimatePresence>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`${
              isSecondDivVisible ? "opacity-100" : "faqcard-animate"
            } transition-all z-40 relative pt-16 list-none`}
          >
            {faqCardData[faqDataState]?.name?.map((faq, index) => {
              return (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 4 }}
                  ref={faqCardRef}
                  className={`text-lg text-white/80 cursor-pointer transition-all ease-linear`}
                  key={index}
                >
                  <FaqCard
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
      <Footer />
    </section>
  );
};

export default Faqs;
