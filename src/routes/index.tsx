import { createBrowserRouter, Link } from "react-router-dom";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: (
      <h1 className=" font-bold text-4xl text-center mt-40">
        404 - Page Not Found
        <Link to="/" className="text-blue-500 block mt-4 text-xl">
          Go back to home
        </Link>
      </h1>
    ),
  },
]);

export default router;
