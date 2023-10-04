import React from "react";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Homescreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className=" px-2 py-4 grid grid-col-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
      {products.map((product) => {
        return (
          <div key={product._id} className="">
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Homescreen;
