import React, { useState } from "react";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import validator from "validator";
import axios from "../utils/axios";

const EmailInputs = ({ setUserCount, userCount }) => {
  const [emailInput, setEmailInpt] = useState("");

  const [loading, setLoading] = useState(false);

  const joinHandler = async (e) => {
    e.preventDefault();

    let email = emailInput.trim();

    if (!validator.isEmail(email) || email === "") {
      return toast.error("Please enter a valid email!");
    }

    try {
      if (email) {
        setLoading(true);
        const { data } = await axios.post("/join", { email });
        if (data.success) {
          toast("🚀 You are up for the early access!");
          setUserCount(userCount + 1);
          setEmailInpt("");
          setLoading(false);
        } else if (data.alreadyExists) {
          toast("🎉 You are already signed up for the early access!");
          setEmailInpt("");
          setLoading(false);
        } else {
          toast.error("🤦‍♂️ Something went wrong!");
          setLoading(false);
        }
      }
    } catch (error) {
      toast.info("🤦‍♂️ Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-4 mt-10 mx-auto items-center justify-center md:w-[90%] w-[95%] xl:w-[65%]">
      <input
        placeholder="your@email.com"
        value={emailInput}
        className="border-2 border-light-secondary transition duration-500 text-light-secondary focus:placeholder-transparent bg-transparent rounded-2xl focus:outline-none p-2 w-[60%] md:pl-4"
        onChange={(e) => {
          setEmailInpt(e.target.value);
        }}
      />
      <div className="relative">
        <img
          src="https://i.imgur.com/BL6mFmK.png"
          alt=""
          className="absolute md:-top-[330%] md:left-24  md:rotate-[40deg] 3xl:rotate-0 lg:rotate-[30deg] -top-[250%] left-6 lg:left-8 scale-[70%] md:scale-[65%] xl:scale-80 3xl:scale-90 3xl:-left-2"
        />
        <button
          className="relative font-semibold text-white bg-secondary rounded-2xl hover:bg-light-secondary transition-all duration-300 border-2 border-secondary hover:border-white p-2 hover:border-opacity-45 whitespace-nowrap md:px-5 cursor-pointer"
          disabled={loading}
          onClick={async (e) => {
            await joinHandler(e);
          }}
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
        pauseOnFocusLoss={false}
        progress={undefined}
        theme="dark"
        transition={Slide}
      />
    </div>
  );
};

export default EmailInputs;
