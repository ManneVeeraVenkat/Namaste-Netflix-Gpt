import React from "react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./RouteConfig";

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
