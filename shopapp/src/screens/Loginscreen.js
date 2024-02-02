import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Loginscreen = ({ history }) => {
  let location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.pushState(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className=" text-center">
        {" "}
        <h1 className=" font-mono font-bold text-2xl uppercase">signin</h1>
      </div>
      {error && <p>{error}</p>}
      {loading && <p>loading</p>}
      <div className="mx-auto">
        <form onSubmit={submitHandler}>
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
          <button
            className=" bg-yellow-100 shadow-md px-4 text-center font-bold mx-auto rounded-sm hover:bg-yellow-200 hover:-translate-y-1 transition uppercase hover:text-gray-700 py2"
            type="submit"
          >
            signin
          </button>
        </form>
      </div>

      <div className="mx-auto mt-5">
        <p className=" text-xl font-semibold uppercase">new user?</p>
        <Link
          to={redirect ? `/resister?redirect=${redirect}` : "/resister"}
          className="text-sm font-mono font-bold uppercase hover:text-yellow-500 hover:underline"
        >
          resister here
        </Link>
      </div>
    </div>
  );
};

export default Loginscreen;
