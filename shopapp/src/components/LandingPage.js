import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div>
        <div className=" flex flex-col sm:flex-row justify-between px-2 py-4">
          <div>
            <img
              className=" h-auto mx-auto"
              src="./images/products.svg"
              alt="products"
            />
          </div>
          <div>
            <p className=" text-9xl font-extrabold font-Phily text-center text-yellow-700">
              We Make Products From Jute
            </p>
          </div>
        </div>
        <div className=" p-10 ">
          <p className=" text-center font-extrabold font-mono text-5xl sm:text-7xl uppercase text-yellow-800">
            our products
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
