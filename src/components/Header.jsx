/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utiles/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utiles/userSlice";
import { Logo_url, User_Avatar } from "../utiles/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHover, setHover] = useState(false);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // Handle error
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user sign in or sing up
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

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
      <img className="w-44" src={Logo_url} alt="logo" />

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
              src={User_Avatar}
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
