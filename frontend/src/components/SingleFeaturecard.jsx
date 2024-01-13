import React, { useState } from "react";

const SingleFeaturecard = ({ feature, index }) => {
  return (
    <div
      className="flex flex-col items-start justify-start mt-4 w-[45%] shadow-md sm:shadow-lg p-4 rounded-md"
      key={index}
    >
      <div className="">{feature.icon}</div>
      <p className="text-white font-semibold text-sm mt-3 mb-1">
        {feature.name}
      </p>
      <p className="text-white text-xs">{feature.desc}</p>
    </div>
  );
};

export default SingleFeaturecard;
