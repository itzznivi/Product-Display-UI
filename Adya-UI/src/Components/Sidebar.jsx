import React from "react";

function Sidebar() {
  const features = ["Feature 1", "Feature 1", "Feature 1", "Feature 1"];

  return (
    <div>
      <div>
        <h3 className="text-[30px] italic text-[#535C91]">Compare</h3>
        <h3 className="text-[30px] font-bold text-[#535C91]">Products</h3>
        <div className="mt-96">
          <div className="relative mt-[-12px] flex gap-x-[10px] font-semibold text-[18px]">
            <button className="bg-[#362d86] text-white xl:px-[25px] xl:py-[7px] lg:px-[15px] lg:py-[5px] md:px-[12px] md:py-[3px] px-[10px] py-[2px] lg:text-[16px] md:text-[12px] text-[10px] lg:rounded-[4px] rounded-[3px]">
              Full
            </button>
            <p className="absolute xl:left-[69px] lg:left-[49px] md:left-[39px] left-[33px] top-1/2 -translate-y-1/2 bg-white xl:px-[7px] xl:py-[6px] lg:px-[5px] lg:py-[4px] md:px-[4px] md:py-[3px] px-[3px] py-[2px] xl:text-[13px] lg:text-[11px] md:text-[9px] text-[8px] rounded-full font-bold">
              OR
            </p>
            <button className="bg-[#a4bce0] text-[#362d86] xl:px-[25px] lg:px-[15px] xl:py-[7px] lg:py-[5px] md:px-[12px] md:py-[3px] px-[10px] py-[2px] lg:text-[16px] md:text-[12px] text-[10px] lg:rounded-[4px] rounded-[3px]">
              Difference
            </button>
          </div>
        </div>
        <h1 className="text-blue-900 mt-10 font-bold font-lato text-2xl">
          Pricing
        </h1>
      </div>
      <h1 className="text-2xl text-blue-900 font-lato font-bold mt-10">
        Features
      </h1>
      <div className="-mt-1 p-10">
        {features.map((feature, index) => (
          <div key={index} className="font-lato mb-9 text-blue-900">{feature}</div>
        ))}
      </div>
      <h1 className="font-lato text-2xl text-blue-900 font-bold">Description</h1>
      <div>
        <div className="font-lato mt-10 text-blue-700">Relative features</div>
      </div>
      <div className="font-lato mt-52 text-blue-900">pros</div>
      <div className="font-lato mt-32 text-blue-900">cons</div>
    </div>
  );
}

export default Sidebar;
