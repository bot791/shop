import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div>
        <div className=" flex flex-col sm:flex-row justify-evenly px-2 py-4">
          <div className="">
            <img
              className=" h-auto mx-auto"
              src="./images/products.svg"
              alt="products"
            />
          </div>
          <div className=" bg-gradient-to-tr from-yellow-400 to-orange-400 rounded-xl">
            <p className=" text-9xl font-extrabold font-Phily text-center text-teal-800">
              We Make Products From Jute
            </p>
          </div>
        </div>
        <div className=" p-10 ">
          <p className=" text-center font-extrabold font-Swash text-7xl sm:text-7xl uppercase text-teal-700">
            Our Products
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
