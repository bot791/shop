import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="text-yellow-100 flex flex-row h-20 bg-neutral-200">
      <h1
        className=" flex flex-row px-4 py-4 text-purple-900 font-extrabold text-2xl sm:text-3xl md:5xl tracking-wide"
        onClick={handleRedirect}
        style={{ cursor: "pointer" }}
      >
        RoyalBrothers
        <img
          className=" h-5 mt-2 sm:mt-3  ml-2"
          src="./images/shop.svg"
          alt="shop"
        />
      </h1>
      <div className="invisible sm:visible ml-auto sm:space-x-4 py-4 absolute right-5 flex flex-row">
        <button className="flex flex-row hover:-translate-y-0.5 transform transition focus:outline-none bg-neutral-400 hover:bg-neutral-300 text-white hover:text-purple-900 px-2 py-2 shadow-lg uppercase tracking-wider font-semibold text-sm">
          Login
          <img className="h-5 pl-1" src="./images/login.svg" alt="login" />
        </button>
        <button className="flex flex-row hover:-translate-y-0.5 transform transition focus:outline-none bg-neutral-400 hover:bg-neutral-300  text-white hover:text-purple-900 px-2 py-2 shadow-lg uppercase tracking-wider font-semibold text-sm">
          Cart
          <img className="h-5 pl-1" src="./images/cart.svg" alt="cart" />
        </button>
      </div>
      <div className=" visible sm:invisible flex flex-row absolute right-1 top-2 space-x-2 px-2 ">
        <button className=" hover:-translate-y-0.5 transform transition focus:outline-none  px-1 py-2">
          <img className=" h-8" src="./images/login.svg" alt="login" />
        </button>
        <button className=" hover:-translate-y-0.5 transform transition focus:outline-none px-1 py-2">
          <img className=" h-8" src="./images/cart.svg" alt="cart" />
        </button>
      </div>
    </div>
  );
};

export default Header;
