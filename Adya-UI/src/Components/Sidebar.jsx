import React from "react";

function Sidebar() {
  const compareStyle = {
    fontSize: "30px",
    fontStyle: "italic",
    color: "#535C91",
  };

  const productsStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#535C91",
  };

  return (
    <div>
      <div>
        <div>
          <h3 style={compareStyle}>Compare</h3>
          <h3 style={productsStyle}>Products</h3>
        </div>
        <div className="mt-96">
          <button className="font-lato bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Full
          </button>
        
          <button className="font-lato bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Difference
          </button>
        </div>
        <h1 className="text-blue-900 mt-20 font-bold font-lato  text-2xl">
          Pricing
        </h1>
      </div>

      <h1 className="text-2xl text-blue-900 font-lato  font-bold mt-10">
        Features
      </h1>
      <div className="-mt-1 p-10">
        <div className="font-lato mb-9 text-blue-900">Feature 1</div>
        <div className="font-lato mb-9 text-blue-900">Feature 1</div>
        <div className="font-lato mb-10 text-blue-900">Feature 1</div>
        <div className="font-lato mb-6 text-blue-900">Feature 1</div>
      </div>
      <h1 className=" font-lato text-2xl text-blue-900 font-bold">
        Description
      </h1>
      <div>
        <div className="font-lato mt-10 text-blue-700"> Relative features</div>
      </div>
      <div className=" font-lato mt-52 text-blue-900">pros</div>
      <div className="font-lato mt-32 text-blue-900">cons</div>
    </div>
  );
}

export default Sidebar;
