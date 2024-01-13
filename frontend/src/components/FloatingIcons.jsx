import React from "react";

import { motion } from "framer-motion";

// const images = [
//   { title: "Borgir truck", src: "https://i.imgur.com/ifsX0dh.png" },
//   { title: "Shop", src: "https://i.imgur.com/1Eck93v.png" },
//   { title: "Lady", src: "https://i.imgur.com/o3xpk3V.png" },
//   { title: "Plate", src: "https://i.imgur.com/rW4tzdi.png" },
//   { title: "Plate Cover", src: "https://i.imgur.com/0NgVfvB.png" },
//   { title: "Table", src: "https://i.imgur.com/wZNavKF.png" },
// ];

// const images2 = [
//   { title: "Menu Board", src: "https://i.imgur.com/UicKyl8.png" },
//   { title: "Chicken Leg piece", src: "https://i.imgur.com/Hcnv42M.png" },
//   { title: "Discount Card", src: "https://i.imgur.com/8idezNb.png" },
//   { title: "Salon", src: "https://i.imgur.com/Ky5UBSm.png" },
//   { title: "Bulb (Idea)", src: "https://i.imgur.com/TebRISS.png" },

//   { title: "Store", src: "https://i.imgur.com/4L1zBfT.png" },
//   { title: "Sale", src: "https://i.imgur.com/7goP3pr.png" },
//   { title: "Cash", src: "https://i.imgur.com/mw8gCO1.png" },
// ];

const FloatingIcons = () => {
  return (
    <motion.div className="hidden xl:flex justify-between items-center">
      <div className="">
        <motion.img
          className="hover:opacity-70 w-20 top-[2rem] opacity-20  left-[11rem] absolute cursor-pointer z-50"
          drag={true}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          src="https://i.imgur.com/ifsX0dh.png"
          alt=""
        />
        <motion.img
          className="hover:opacity-70 w-20 opacity-20 cursor-pointer top-[20rem] left-[8rem] absolute z-50"
          drag={true}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          src="https://i.imgur.com/1Eck93v.png"
          alt=""
        />
        <motion.img
          className="hover:opacity-70 w-20 opacity-20 cursor-pointer top-[30rem] 3xl:top-[35rem] left-[15rem] 3xl:left-[18rem] absolute z-50"
          drag={true}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          src="https://i.imgur.com/wZNavKF.png"
          alt=""
        />
        <motion.img
          className="hover:opacity-70 w-20 opacity-20 cursor-pointer top-[37rem] 3xl:top-[40rem] left-8 3xl:left-[4rem] absolute z-50"
          drag={true}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          src="https://i.imgur.com/Ky5UBSm.png"
          alt=""
        />
      </div>
      <div className="">
        <motion.img
          className="hover:opacity-70 opacity-20 z-50 w-20 top-[6rem] right-[4rem] absolute cursor-pointer"
          drag={true}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          src="https://i.imgur.com/UicKyl8.png"
          alt=""
        />
        <motion.img
          className="hover:opacity-70  z-50 w-20 opacity-20 top-[14rem] 3xl:right-[15rem] right-[12rem] absolute cursor-pointer"
          drag={true}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          src="https://i.imgur.com/4L1zBfT.png"
          alt=""
        />
        <motion.img
          className="hover:opacity-70 z-50 opacity-20 w-20 3xl:top-[28rem] top-[25rem] right-[10rem] absolute cursor-pointer"
          drag={true}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          src="https://i.imgur.com/7goP3pr.png"
          alt=""
        />
        <motion.img
          className="hover:opacity-70 z-50 opacity-20 w-20 3xl:top-[45rem] top-[38rem] right-[16rem] 3xl:right-[20rem] absolute cursor-pointer"
          drag={true}
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          src="https://i.imgur.com/mw8gCO1.png"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default FloatingIcons;
