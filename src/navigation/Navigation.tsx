import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { PublicRoutes } from "./routes/PublicRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import MustNotBeLoggedIn from "./layouts/MustNotBeLoggedIn";
import NotFound from "../pages/NotFound";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import MustBeAnAdmin from "./layouts/MustBeAnAdmin";

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
        {
          element: <MustBeAnAdmin />,
          children: PrivateRoutes,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],{basename:"/Online-Course-Website"});
  return <RouterProvider router={router} />;
};

export default Navigation;
