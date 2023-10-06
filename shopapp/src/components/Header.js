import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="text-yellow-100 flex flex-row h-20">
      <h1
        className="px-4 py-4 font-Phily text-purple-700 font-extrabold text-4xl sm:text-5xl tracking-wider"
        onClick={handleRedirect}
        style={{ cursor: "pointer" }}
      >
        RoyalJute
      </h1>
      <div className=" invisible sm:visible ml-auto space-x-4 flex items-center mr-2">
        <button className="hover:bg-orange-400 hover:-translate-y-0.5 transform transition focus:outline-none bg-orange-500 text-white px-2 py-2 shadow-lg uppercase tracking-wider font-semibold text-sm">
          Login
        </button>
        <button className="hover:bg-orange-400 hover:-translate-y-0.5 transform transition focus:outline-none bg-orange-500 text-white px-2 py-2 shadow-lg uppercase tracking-wider font-semibold text-sm">
          Cart
        </button>
      </div>
      <div className=" visible sm:invisible flex flex-row space-x-2">
        <button className=" hover:-translate-y-0.5 transform transition focus:outline-none  text-white px-2 py-2  uppercase tracking-wider font-semibold text-sm">
          <img className=" h-14" src="./images/login.svg" alt="login" />
        </button>
        <button className=" hover:-translate-y-0.5 transform transition focus:outline-none  text-white px-2 py-2  uppercase tracking-wider font-semibold text-sm">
          <img className=" h-14" src="./images/cart.svg" alt="cart" />
        </button>
      </div>
    </div>
  );
};

export default Header;
