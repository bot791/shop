import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div>
        <div className=" flex flex-col sm:flex-row justify-evenly px-2 py-4">
          <div className="">
            <img
              className="h-full mx-auto"
              src="./images/landingpage.svg"
              alt="products"
            />
          </div>
          <div className=" bg-gradient-to-tr from-gray-200 to-gray-200 rounded-xl p-2">
            <p className="text-6xl sm:text-7xl md:text-9xl font-extrabold font-Phily text-center text-teal-800">
              We Make Products From Jute
            </p>
          </div>
        </div>
        <div className=" p-10 ">
          <p className=" text-center font-extrabold font-Gabarito text-5xl sm:text-7xl uppercase text-zinc-500">
            Our Products
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
