import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className=" h-max p-4 bg-white hover:bg-neutral-100 shadow-sm hover:-translate-y-1 transform transition ">
      <Link to={`/product/${product._id}`}>
        <img className="" src={product.image} alt="" />
        <h1 className=" font-bold text-xl p-2 text-center font-Ibm text-indigo-900 ">
          {product.name}
        </h1>
        <p className=" font-extrabold text-2xl text-center text-lime-500">
          Rs.{product.price}
        </p>
        <p className=" font-mono font-semibold text-center text-indigo-900">
          In Stock {product.countInStock}
        </p>
      </Link>
    </div>
  );
};

export default Product;
