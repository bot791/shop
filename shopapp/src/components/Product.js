import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className=" p-4 bg-white hover:bg-neutral-100 ring-2 ring-white rounded-md ">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="" />

        <h1 className=" font-bold text-lg  p-2   text-center text-emerald-500">
          {product.name}
        </h1>
        <p className=" font-bold font-mono       text-center text-gray-900">
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
