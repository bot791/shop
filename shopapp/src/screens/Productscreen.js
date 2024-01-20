import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Productscreen() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`https://shop-api-6ak8.onrender.com/api/products/${id}`);
      setProduct(data);
      console.log(data);
    };
    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}`);
  };
  return (
    <div className="flex sm:flex-row flex-col justify-evenly w-screen mx-auto space-y-2 bg-white">
      <div className="">
        <img className="h-96 mx-auto" src={product.image} alt="product" />
      </div>
      <div className="  p-10 flex flex-col space-y-2 rounded-xl ">
        <p className=" text-indigo-900 text-lg font-bold font-Ibm tracking-wider">
          Name: {product.name}
        </p>
        <p className=" text-lime-500 text-2xl font-extrabold tracking-wider">
          Price: {product.price}
        </p>
        <p className=" text-indigo-900 text-lg font-bold tracking-wider">
          Brand: {product.brand}
        </p>
        <p className=" text-indigo-900 text-lg font-mono tracking-wider">
          Description: {product.description}
        </p>
        {product?.location && (
          <p className="text-indigo-900 text-lg font-mono tracking-wider">
            Location: {product.location}
          </p>
        )}
        <button className="rounded-md hover:-translate-y-0.5 transform transition focus:outline-none bg-indigo-600 hover:bg-indigo-500 text-white hover:text-yellow-200 px-2 py-2 shadow-lg uppercase tracking-wider font-semibold text-sm">
          buy now
        </button>
        <button
          onClick={addToCartHandler}
          className="rounded-md hover:-translate-y-0.5 transform transition focus:outline-none bg-indigo-700 hover:bg-indigo-500 text-white hover:text-yellow-200 px-2 py-2 shadow-lg uppercase tracking-wider font-semibold text-sm"
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Productscreen;
