import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { register } from "../actions/userActions";

const Registerscreen = ({ history }) => {
  let location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("passwords do not match");
    } else {
      //dispatchResister
      dispatch(register(name, email, password));
    }
  };
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className=" text-center">
        {" "}
        <h1 className=" font-mono font-bold text-2xl uppercase">signup</h1>
      </div>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      {loading && <p>{loading}</p>}
      <div className="mx-auto">
        <form onSubmit={submitHandler}>
          <label for="name" className=" uppercase font-Phily mx-2 font-bold">
            enter name
          </label>
          <input
            className="border bg-gray-200  border-gray-500 mt-2 focus:outline-none focus:bg-white focus:border-purple-500"
            id="name"
            type="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <label for="email" className=" uppercase font-Phily mx-2 font-bold">
            enter email
          </label>
          <input
            className="border bg-gray-200  border-gray-500 mt-2 focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <br />
          <br />
          <label
            for="password"
            className=" uppercase font-Phily mx-2 font-bold"
          >
            enter password
          </label>
          <input
            className="border bg-gray-200 border-gray-500  focus:outline-none focus:bg-white focus:border-purple-500"
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <br />
          <br />
          <label
            for="confirmpassword"
            className=" uppercase font-Phily mx-2 font-bold"
          >
            confirm password
          </label>
          <input
            className="border bg-gray-200 border-gray-500  focus:outline-none focus:bg-white focus:border-purple-500"
            id="confirmpassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button
            className=" bg-yellow-100 shadow-md px-4 text-center font-bold mx-auto rounded-sm hover:bg-yellow-200 hover:-translate-y-1 transition uppercase hover:text-gray-700 py2"
            type="submit"
          >
            register
          </button>
        </form>
      </div>
      <div className="mx-auto mt-5">
        <p className=" text-xl font-semibold uppercase">have an account?</p>
        <Link
          to={redirect ? `/login?redirect=${redirect}` : "/login"}
          className="text-sm font-mono font-bold uppercase hover:text-yellow-500 hover:underline"
        >
          login
        </Link>
      </div>
    </div>
  );
};

export default Registerscreen;
