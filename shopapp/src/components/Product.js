import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className=" h-max p-4 bg-white hover:bg-yellow-50 shadow-sm hover:-translate-y-1 transform transition ">
      <Link to={`/product/${product._id}`}>
        <img className="" src={product.image} alt="" />
        <h1 className=" font-bold text-3xl p-2 text-center text-emerald-950 ">
          {product.name}
        </h1>
        <p className=" font-extrabold text-xl text-center text-emerald-950">
          Rs.{product.price}
        </p>
        <p className=" font-mono font-semibold text-center text-gray-700">
          In Stock {product.countInStock}
        </p>
      </Link>
    </div>
  );
};

export default Product;
