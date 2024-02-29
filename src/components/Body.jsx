import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./RouteConfig";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utiles/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utiles/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user sign in or sing up
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
