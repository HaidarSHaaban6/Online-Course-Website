import { RouteObject } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutUsPage from "../../pages/AboutUsPage";
import ContactPage from "../../pages/ContactPage";
import CoursesOpenPage from "../../pages/CoursesOpenPage";
import CoursesPage from "../../pages/CoursesPage";
import PricingPage from "../../pages/PricingPage";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/courses/:id",
    element: <CoursesOpenPage />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
];
