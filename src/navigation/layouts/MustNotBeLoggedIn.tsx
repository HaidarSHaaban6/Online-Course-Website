import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useEffect } from "react";

const MustNotBeLoggedIn = () => {
  //here we put the check if_logged_in and redirect to home if true
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser]);
  return <Outlet />;
};

export default MustNotBeLoggedIn;
