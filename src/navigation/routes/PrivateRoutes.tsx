import { RouteObject } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

export const PrivateRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
