import React from "react";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import LandingPage from "../components/LandingPage";

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
    <div>
      <LandingPage />
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {products.map((product) => {
          return (
            <div key={product._id} className="">
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homescreen;
