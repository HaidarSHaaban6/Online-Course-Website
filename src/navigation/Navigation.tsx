import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { PublicRoutes } from "./routes/PublicRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import MustNotBeLoggedIn from "./layouts/MustNotBeLoggedIn";
import NotFound from "../pages/NotFound";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          children: PublicRoutes,
        },
        {
          element: <MustNotBeLoggedIn />,
          children: AuthRoutes,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
