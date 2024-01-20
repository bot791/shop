import React from "react";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import LandingPage from "../components/LandingPage";

const Homescreen = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://shop-api-6ak8.onrender.com/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(products);
  return (
    <div>
      <LandingPage />
      <div className="px-2 py-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mb-4"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center bg-neutral-100">
          {filteredProducts.map((product) => (
            <div key={product._id} className="">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
