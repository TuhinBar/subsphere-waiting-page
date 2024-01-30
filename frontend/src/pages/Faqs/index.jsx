import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import FaqCard from "../../components/FaqCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Faqs = () => {
  const faqNavList = ["Pricing", "Starting a project"];
  const faqCardData = [
    {
      name: [
        {
          question: "What size budgets do you typically work with? One",
          answer:
            "We typically work with clients within the following project brackets £2-5k £5-10k £10-20k £25k+",
        },
        {
          question: "How do I figure out how much your services will cost?",
          answer:
            "Determining the cost of our services is best achieved through a 15-30 minute discovery call, where we can understand your unique requirements. Following that, we will provide a transparent and detailed price within 24-48 hours tailored specifically to your needs.",
        },
        {
          question: "What are the payment terms for a typical project?",
          answer: "50% to begin, 25% halfway through, and 25% upon delivery.",
        },
        {
          question: "How much does Webflow hosting cost?",
          answer:
            "The cost of Webflow hosting depends on the specific plan you choose. Webflow offers a variety of hosting plans with different features and pricing tiers. It's best to visit the Webflow website or contact their sales team directly for the most up-to-date and accurate pricing information for their hosting services.",
        },
        {
          question: "Retainer pricing",
          answer:
            "Need design and Webflow development delivery on a continual basis? Schedule a discovery call and we can create a flexible retainer specifically for your needs.",
        },
      ],
    },
    {
      name: [
        {
          question: "What size budgets do you typically work with? two",
          answer:
            "We typically work with clients within the following project brackets £2-5k £5-10k £10-20k £25k+",
        },
        {
          question: "How do I figure out how much your services will cost?",
          answer:
            "Determining the cost of our services is best achieved through a 15-30 minute discovery call, where we can understand your unique requirements. Following that, we will provide a transparent and detailed price within 24-48 hours tailored specifically to your needs.",
        },
        {
          question: "What are the payment terms for a typical project?",
          answer: "50% to begin, 25% halfway through, and 25% upon delivery.",
        },
        {
          question: "How much does Webflow hosting cost?",
          answer:
            "The cost of Webflow hosting depends on the specific plan you choose. Webflow offers a variety of hosting plans with different features and pricing tiers. It's best to visit the Webflow website or contact their sales team directly for the most up-to-date and accurate pricing information for their hosting services.",
        },
        {
          question: "Retainer pricing",
          answer:
            "Need design and Webflow development delivery on a continual basis? Schedule a discovery call and we can create a flexible retainer specifically for your needs.",
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
