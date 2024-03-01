/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { auth } from "../utiles/firebase";
import Header from "./Header";
import { checkValidate } from "../utiles/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utiles/userSlice";
import { Bg_Pic } from "../utiles/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const HandleSignUp = () => {
    setLoginForm(!isSignInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handlebtnClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            // photoURL: "https://example.com/jane-q-user/profile.jpg", if u want we have profie pic also
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // Profile updated!
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Bg_Pic} alt="logo" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 absolute p-12 bg-black  bg-opacity-70 my-40 mx-auto right-0 left-0 text-white rounded-xl "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-40 rounded-md "
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-40 rounded-md "
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700 bg-opacity-40 rounded-md"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 w-full rounded-md"
          onClick={handlebtnClick}
        >
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
