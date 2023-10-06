import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Productscreen() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
      console.log(data);
    };
    fetchProduct();
  }, [id]);
  return (
    <div className="flex sm:flex-row flex-col justify-evenly w-screen mx-auto space-y-2 bg-white">
      <div className="">
        <img className="h-96 mx-auto" src={product.image} alt="product" />
      </div>
      <div className="  p-10 flex flex-col space-y-2 rounded-xl ">
        <p className=" text-indigo-900 text-lg font-extrabold tracking-wider">
          Name: {product.name}
        </p>
        <p className=" text-indigo-900 text-lg font-extrabold tracking-wider">
          Price: {product.price}
        </p>
        <p className=" text-indigo-900 text-lg font-extrabold tracking-wider">
          Brand: {product.brand}
        </p>
        <p className=" text-indigo-900 text-lg font-extrabold tracking-wider">
          Description: {product.description}
        </p>
        <button className="hover:bg-orange-400 hover:-translate-y-0.5 transform transition focus:outline-none bg-orange-500 text-white px-2 py-2 shadow-lg uppercase tracking-wider font-semibold text-sm">
          buy now
        </button>
        <button className="hover:bg-orange-400 hover:-translate-y-0.5 transform transition focus:outline-none bg-orange-500 text-white px-2 py-2 shadow-lg uppercase tracking-wider font-semibold text-sm">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Productscreen;
