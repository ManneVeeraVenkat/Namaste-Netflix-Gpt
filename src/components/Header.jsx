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
        <div className="m-2 flex items-center">
          <div className="flex flex-wrap mr-[400px] cursor-pointer space-x-4">
            <span className="text-white">Home</span>
            <span className="text-white">Movies</span>
            <span className="text-white">Tv Shows</span>
            <span className="text-white">New & Popular</span>
            <span className="text-white">My List</span>
            <span className="text-white">Browse by Languages</span>
          </div>
          {user.displayName && (
            <span className="text-white font-bold mr-2">
              {user.displayName}
            </span>
          )}
          <span className="text-white mr-2 p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ltr-4z3qvp e1svuwfo1"
              data-name="Bell"
              aria-labelledby=":Rlp94m:"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>

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
