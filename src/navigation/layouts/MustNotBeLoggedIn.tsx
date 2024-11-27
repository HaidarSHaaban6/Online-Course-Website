import { Outlet } from "react-router-dom";

const MustNotBeLoggedIn = () => {
    //here we put the check if_logged_in and redirect to home if true
  return <Outlet />;
};

export default MustNotBeLoggedIn;
