import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setLoginForm] = useState(true);
  const HandleSignUp = () => {
    setLoginForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black  bg-opacity-70 my-40 mx-auto right-0 left-0 text-white rounded-xl ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-40 rounded-md "
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-40 rounded-md "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700 bg-opacity-40 rounded-md"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-md">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p>
          {isSignInForm ? "New to Netflix? " : " Already a User ?"}
          <span className="font-bold cursor-pointer" onClick={HandleSignUp}>
            {isSignInForm ? "Sign Up Now." : " Sign In Now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
