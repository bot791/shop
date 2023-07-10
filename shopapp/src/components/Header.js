import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <header className=" w-full bg-indigo-950 text-zinc-100 flex flex-row h-[50px]">
      <h1
        className="flex items-center ml-2 font-Swash font-bold text-lg tracking-widest"
        onClick={handleRedirect}
        style={{ cursor: "pointer" }}
      >
        RoyalJute
      </h1>
      <div className="ml-auto space-x-4 flex items-center mr-2">
        <button className=" text-center ring-2 ring-white bg-blue-900 rounded-full px-4  py-1  hover:bg-blue-200 hover:text-gray-800 hover:ring-blue-500 font-mono font-bold">
          Login
        </button>
        <button className=" text-center ring-2 ring-white bg-blue-900 rounded-full px-4  py-1  hover:bg-blue-200 hover:text-gray-800 hover:ring-blue-500 font-mono font-bold">
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
