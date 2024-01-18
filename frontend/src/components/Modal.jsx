import React from "react";
import { FaLinkedin, FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { MdCopyAll } from "react-icons/md";
import { RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

const Modal = ({ waitlistNumber }) => {
  return (
    <div className="h-screen z-50 backdrop-blur-md bg-black/10 w-screen fixed inset-0 flex justify-center items-center">
      <div className="m-auto px-16 py-8 bg-[#414855] text-white flex justify-center items-center flex-col rounded-md gap-6">
        <div className="flex justify-center items-center flex-col gap-1">
          <img
            src="https://i.imgur.com/n2AEOXD.gif"
            alt=""
            className="w-20 h-20"
          />
          <h2 className="font-semibold text-2xl text-primary">
            Congratulations!
          </h2>
          <p className="text-sm">
            {" "}
            You are now subscribed for the early access!
          </p>

          <p className="text-secondary text-sm">
            {" "}
            <span className="font-bold">{waitlistNumber}</span> businesses are
            with you already
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Help other businesses to find us</p>

          <div className="border border-secondary rounded-md flex items-center justify-between py-1 px-2 text-sm">
            <input
              type="text"
              className=" border-light-secondary bg-[#414855] rounded-md focus:outline-none w-full text-xs"
              value={
                `https://waitlist.thesubsphere.co/?ref=${waitlistNumber}`.substring(
                  0,
                  25
                ) + `...`
              }
            />
            <button className=" rounded-md text-white ml-2">
              <MdCopyAll size={18} />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p>Tell the world what you just did</p>
          <div className="flex">
            <button className="border flex text-xs justify-center items-center gap-2 rounded-md p-2">
              <FaXTwitter size={18} />
              Share on Twitter
            </button>

            <button className="border flex text-xs justify-center items-center gap-2 rounded-md p-2 ml-2">
              <FaLinkedin size={18} />
              Share on LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
