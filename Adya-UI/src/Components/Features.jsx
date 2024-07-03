import Sparkle from "../assets/sparkle.svg";
import React from "react";

const Features = () => {
  const color = {
    fontSize: "20px",
    fontStyle: "bold",
    color: "white",
  };

  const features = ["Feature1", "Feature2", "Feature3", "Feature4"];
  const pros = ["pro 1", "pro 2", "pro 3"];
  const cons = ["con 1", "con 2", "con 3"];
  const loremText =
    "Lorem ipsum is placeholder text commonly used in the graphic, print";

  return (
    <div className="mt-16">
      {[...Array(4)].map((_, idx) => (
        <div
          key={idx}
          className={`mt-${idx === 0 ? "14" : "1"} p-1 bg-blue-50`}
        >
          <div className="flex justify-between mb-3">
            {features.map((feature, index) => (
              <span key={index} className="text-blue-900">
                {feature}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-16">
        <div className="mt-1 p-4 bg-blue-50">
          <div className="flex justify-between items-center">
            {[...Array(4)].map((_, idx) => (
              <span key={idx} className="font-lato text-blue-950">
                {loremText}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-1 p-4 font-lato bg-blue-800 border-r-4">
          <p style={color}>AI Summary</p>
        </div>
      </div>
      <div>
        <div className="mt-1 p-4">
          <div className="flex justify-between">
            {[...Array(4)].map((_, idx) => (
              <span key={idx}>
                <ul className="list-disc">
                  {pros.map((pro, index) => (
                    <li key={index} className="font-lato text-blue-950">
                      {pro}
                    </li>
                  ))}
                </ul>
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3 p-4">
          <div className="flex justify-between">
            {[...Array(4)].map((_, idx) => (
              <span key={idx}>
                <ul className="list-disc">
                  {cons.map((con, index) => (
                    <li
                      key={index}
                      className="font-lato font-bold text-blue-950"
                    >
                      {con}
                    </li>
                  ))}
                </ul>
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3 p-4">
          <div className="flex justify-between">
            {[...Array(4)].map((_, idx) => (
              <button
                key={idx}
                className="bg-[#211a66] hover:bg-[#0b0696] transition-colors duration-200 text-white rounded-[7px] font-semibold  xl:text-[14px] lg:text-[13px] md:text-[11px] text-[9px]  xl:px-[25px] xl:py-[12px]  lg:px-[22px]  lg:py-[10px]  md:px-[20px]  md:py-[9px]  px-[18px]  py-[8px]  "
              >
                Add to cart
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative px-[30px]">
        <div className="absolute left-0 top-9 -translate-y-1/2">
          <div className="relative w-[120px] h-[120px] bg-gradient-to-br from-[#1ed2bd] to-[#69dd79] rounded-full border-[4px] border-white shadow-[0px_0px_15px_2px_#00000050]">
            <img
              src={Sparkle}
              alt="sparkle-icon-1"
              className="w-[70px] h-[70px] text-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={Sparkle}
              alt="sparkle-icon-1"
              className="w-[25px] h-[25px] text-[#ffffff] absolute top-[20px] right-[20px]"
            />
            <img
              src={Sparkle}
              alt="sparkle-icon-1"
              className="w-[18px] h-[18px] text-[#ffffff] absolute bottom-[23px] left-[23px]"
            />
          </div>
        </div>
        <div className="pl-[120px] pr-[30px] p-[20px] text-[#3a434f] bg-gradient-to-br from-[#d2eee5] to-[#e8d8f6] rounded-[15px] font-semibold xl:text-[13px] lg:text-[11px] md:text-[10px] text-[9px]">
          <p>
            Lorenispsum is the text that can be used to type the description to
            create a feel of the what the product holds. Lorenispsum is the text
            that can be used to type the description to create a feel of the
            what the product holds. Lorenispsum is the text that can be used to
            type the description to create a feel of the what the product holds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
