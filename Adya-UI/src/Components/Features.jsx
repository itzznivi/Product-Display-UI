import React from "react";
import Sparkle from "../assets/sparkle.svg";

const Features = () => {
  const color = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  };

  const features = ["Feature1", "Feature2", "Feature3", "Feature4"];
  const pros = ["pro 1", "pro 2", "pro 3"];
  const cons = ["con 1", "con 2", "con 3"];
  const loremText =
    "Lorem ipsum is placeholder text commonly used in the graphic, print";

  return (
    <div className="mt-16 w-full rounded-md">
      {[...Array(4)].map((_, idx) => (
        <div
          key={idx}
          className={`mt-${idx === 0 ? "14" : "1"} p-1 bg-blue-50 rounded-md`}
        >
          <div className="flex flex-wrap justify-around mb-3 rounded-md">
            {features.map((feature, index) => (
              <span
                key={index}
                className="text-blue-900 text-sm md:text-base lg:text-lg"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-16">
        <div className="mt-1 p-4 bg-blue-50 rounded-md">
          <div className="flex p-4 justify-between items-center">
            {[...Array(4)].map((_, idx) => (
              <span
                key={idx}
                className="font-lato text-blue-950 text-xs md:text-sm lg:text-base"
              >
                {loremText}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-1 p-4 font-lato bg-blue-800 border-r-4 rounded-md">
          <p style={color}>AI Summary</p>
        </div>
      </div>
      <div>
        <div className="mt-1 p-4">
          <div className="flex flex-wrap justify-between">
            {[...Array(4)].map((_, idx) => (
              <span key={idx}>
                <ul className="list-disc">
                  {pros.map((pro, index) => (
                    <li
                      key={index}
                      className="font-lato text-blue-950 text-xs md:text-sm lg:text-base"
                    >
                      {pro}
                    </li>
                  ))}
                </ul>
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3 p-4">
          <div className="flex flex-wrap justify-between">
            {[...Array(4)].map((_, idx) => (
              <span key={idx}>
                <ul className="list-disc">
                  {cons.map((con, index) => (
                    <li
                      key={index}
                      className="font-lato font-bold text-blue-950 text-xs md:text-sm lg:text-base"
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
          <div className="flex flex-wrap justify-between">
            {[...Array(4)].map((_, idx) => (
              <button
                key={idx}
                className="bg-[#211a66] hover:bg-[#0b0696] transition-colors duration-200 text-white rounded-[7px] font-semibold xl:text-[14px] lg:text-[13px] md:text-[11px] text-[9px] xl:px-[25px] xl:py-[12px] lg:px-[22px] lg:py-[10px] md:px-[20px] md:py-[9px] px-[18px] py-[8px]"
              >
                Add to cart
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative px-4 md:px-[30px]">
        <div className="absolute left-0 top-9 -translate-y-1/2">
          <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-gradient-to-br from-[#1ed2bd] to-[#69dd79] rounded-full border-[4px] border-white shadow-[0px_0px_15px_2px_#00000050]">
            <img
              src={Sparkle}
              alt="sparkle-icon-1"
              className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] text-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={Sparkle}
              alt="sparkle-icon-1"
              className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] text-[#ffffff] absolute top-[15px] right-[15px] md:top-[20px] md:right-[20px]"
            />
            <img
              src={Sparkle}
              alt="sparkle-icon-1"
              className="w-[10px] h-[10px] md:w-[18px] md:h-[18px] text-[#ffffff] absolute bottom-[15px] left-[15px] md:bottom-[23px] md:left-[23px]"
            />
          </div>
        </div>
        <div className="pl-[90px] md:pl-[120px] pr-[10px] md:pr-[30px] p-[10px] md:p-[20px] text-[#3a434f] bg-gradient-to-br from-[#d2eee5] to-[#e8d8f6] rounded-[15px] font-semibold text-xs md:text-sm lg:text-base">
          <p>
            Lorem ipsum is the text that can be used to type the description to
            create a feel of what the product holds. Lorem ipsum is the text
            that can be used to type the description to create a feel of what
            the product holds. Lorem ipsum is the text that can be used to type
            the description to create a feel of what the product holds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
