import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MoviDetails from "./MoviDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/movie/:movieId/:movieTitle",
    element: <MoviDetails />,
  },
]);
export default appRouter;
