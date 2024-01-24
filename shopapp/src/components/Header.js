import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "Medicine",
    description: "",
    price: 0,
    location: "",
  });


  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  const handleAddProductClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Convert the "price" value to a number if the field is "price"
    const updatedValue = name === "price" ? parseFloat(value) : value;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make a POST request to the API endpoint
      const response = await axios.post("https://shop-api-6ak8.onrender.com/api/products", formData);
  
      // Handle the response from the server if needed
      console.log("Product added successfully:", response.data);
  
      // Show a success notification
      toast.success("Product added successfully", {
        position: "top-right",
      });
  
      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      // Handle errors, log or show an error message to the user
      console.error("Error adding product:", error);
  
      // Show an error notification
      toast.error("Error adding product. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="text-yellow-100 flex flex-row h-20 bg-neutral-200">
      <h1
        className=" flex flex-row px-4 py-4 text-blue-600 font-extrabold text-2xl sm:text-3xl md:5xl tracking-wide"
        onClick={handleRedirect}
        style={{ cursor: "pointer" }}
      >
        Meds.etc
        <img
          className=" h-5 mt-2 sm:mt-3  ml-2"
          src="./images/shop.svg"
          alt="shop"
        />
      </h1>
      <div className="invisible sm:visible ml-auto sm:space-x-4 py-4 absolute right-5 flex flex-row">
      <button
        className="flex flex-row hover:-translate-y-0.5 transform transition focus:outline-none bg-neutral-400 hover:bg-neutral-300 text-white hover:text-purple-900 px-2 py-2 shadow-lg uppercase tracking-wider font-semibold text-sm"
        onClick={handleAddProductClick}
      >
        Add product
        <img className="h-5 pl-1" src="./images/login.svg" alt="login" />
      </button>
        <button className="flex flex-row hover:-translate-y-0.5 transform transition focus:outline-none bg-transparent hover:bg-blue-400 text-gray-600 hover:text-yellow-100 px-2 py-2 hover:shadow-lg uppercase tracking-wider font-semibold text-sm">
          Login
          <img className="h-5 pl-1" src="./images/signin.svg" alt="login" />
        </button>
        <button className="flex flex-row hover:-translate-y-0.5 transform transition focus:outline-none bg-transparent hover:bg-blue-400  text-gray-600 hover:text-yellow-100 px-2 py-2 hover:shadow-lg uppercase tracking-wider font-semibold text-sm">
          Cart
          <img className="h-5 pl-1" src="./images/cart.svg" alt="cart" />
        </button>
      </div>
      <div className=" visible sm:invisible flex flex-row absolute right-1 top-2 space-x-2 px-2 ">
        <button className=" hover:-translate-y-0.5 transform transition focus:outline-none  px-1 py-2">
          <img className=" h-8" src="./images/signin.svg" alt="login" />
        </button>
        <button className=" hover:-translate-y-0.5 transform transition focus:outline-none px-1 py-2">
          <img className=" h-8" src="./images/cart.svg" alt="cart" />
        </button>
      </div>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <form onSubmit={handleAddProductSubmit}>
              <label style={{color:"blue"}}>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{ marginLeft: "10px", }}
                />
              </label>
              <br />
              <label style={{color:"blue"}}>
                Brand:
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  style={{ marginLeft: "10px" }}
                />
              </label>
              <br />
              <label style={{color:"blue"}}>
                Category:
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  style={{ marginLeft: "10px" }}
                />
              </label>
              <br />
              <label style={{color:"blue"}}>
                Description:
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  style={{ marginLeft: "10px" }}
                />
              </label>
              <br />
              <label style={{color:"blue"}}>
                Price:
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  style={{ marginLeft: "10px" }}
                />
              </label>
              <br />
              <label style={{color:"blue"}}>
                Location:
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  style={{ marginLeft: "10px" }}
                />
              </label>
              <br />
              <button
                type="submit"
                style={{
                  marginTop: "10px",
                  background: "blue",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add Product
              </button>
            </form>
            <button
              onClick={handleCloseModal}
              style={{
                marginTop: "10px",
                background: "red",
                color: "white",
                padding: "5px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
