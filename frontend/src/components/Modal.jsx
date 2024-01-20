import React, { useEffect } from "react";
import { FaLinkedin, FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { MdClose, MdCopyAll } from "react-icons/md";
import { RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { handleLinkedInShare } from "../utils/sharePostContents";

const getTheContratulationModalContent = ({
  waitlistNumber,
  clientDetails,
  setShow,
}) => {
  return (
    <div className="min-h-fit max-h-[650px] w-[95%] md:w-[450px] px-8 py-8 bg-[#414855] text-white flex justify-center items-center flex-col rounded-md gap-6 relative">
      <MdClose
        className="absolute text-xl right-4 cursor-pointer top-4"
        onClick={() => {
          setShow(false);
        }}
      />
      <div className="flex justify-center items-center flex-col gap-1 w-full ">
        <img
          src="https://i.imgur.com/n2AEOXD.gif"
          alt=""
          className="w-20 h-20"
        />
        <h2 className="font-semibold text-2xl text-primary">
          Congratulations!
        </h2>
        <p className="text-sm text-center">
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
            readOnly
            className=" border-light-secondary bg-[#414855] rounded-md focus:outline-none w-full text-xs"
            value={
              `https://waitlist.thesubsphere.co/?ref=${waitlistNumber}`.substring(
                0,
                25
              ) + `...`
            }
          />
          <button
            className=" rounded-md text-white ml-2"
            onClick={() => {
              navigator.clipboard.writeText(
                `https://waitlist.thesubsphere.com/?ref=${clientDetails?.referId}`
              );
              toast.success("Copied to clipboard!");
            }}
          >
            <MdCopyAll size={18} />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-2">
        <p className="text-xs md:text-sm">Tell the world what you just did</p>
        <div className="flex gap-2">
          <button className="border flex text-xs justify-center items-center gap-2 rounded-md whitespace-nowrap px-1 py-[6px]">
            <FaXTwitter size={18} />
            Share on Twitter
          </button>

          <button
            className="border flex text-xs justify-center items-center gap-2 rounded-md whitespace-nowrap px-1 py-[6px]"
            onClick={() => {
              handleLinkedInShare();
            }}
          >
            <FaLinkedin size={18} />
            Share on LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

// the setShow parameter is must!

const Modal = ({ modalContent, waitlistNumber, clientDetails, setShow }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component is unmounted or the modal is closed
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(5px)",
        zIndex: 100,
      }}
      className="w-full h-screen fixed inset-0 flex justify-center items-center shadow-md"
    >
      {modalContent ? (
        <div
          className={`min-h-fit max-h-[650px] w-[95%] md:w-[700px]  relative rounded-lg md:rounded-xl px-4 md:px-8 py-2 md:py-5 overflow-y-auto bg-white`}
        >
          <MdClose
            className="absolute text-xl right-4 cursor-pointer top-4"
            onClick={() => {
              setShow(false);
            }}
          />
          {modalContent}
        </div>
      ) : (
        getTheContratulationModalContent({
          waitlistNumber,
          clientDetails,
          setShow,
        })
      )}
    </div>
  );
};

export default Modal;
