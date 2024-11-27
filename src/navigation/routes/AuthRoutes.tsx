import { RouteObject } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";

export const AuthRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
];
