/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utiles/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isHover, setHover] = useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // Handle error
      });
  };

  const handleMouseHover = () => {
    setHover(!isHover);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleDropdownMouseEnter = () => {
    setHover(true);
  };

  return (
    <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex p-2 items-center">
          {user.displayName && (
            <span className="text-white font-bold mr-4">
              {user.displayName}
            </span>
          )}
          <div className="relative">
            <img
              className="w-8 h-8 rounded my-2 cursor-pointer"
              alt="profileicon"
              src="https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcbiyWyRsavP1cuTeuv2LwopI3TOeGeWmr-Wu2P7L4zvKrE74V9ONb7SvmexaWLMYpdiA8e0YOZTG5Oh8AOV9aewaIpChxU.png?r=258"
              onMouseEnter={handleMouseHover}
            />

            {isHover && (
              <div
                className="absolute bg-black bg-opacity-70 w-48 mt-2 py-2 rounded-md shadow-lg right-0"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="block px-4 py-2 font-bold border-b-stone-50 text-white rounded-xl hover:text-white border-b border-gray-600 cursor-pointer"
                >
                  Account
                </a>
                <a
                  href="#"
                  onClick={handleSignOut}
                  className="block px-4 py-2 font-bold text-white rounded-xl hover:text-white border-b border-gray-600 cursor-pointer"
                >
                  Sign Out from Netflix
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
