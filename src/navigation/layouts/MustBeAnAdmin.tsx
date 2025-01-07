import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

const MustBeAnAdmin = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const navigate = useNavigate();
  // admin user is the user with the email fadinoumih18@gmail.com
  if (!currentUser) navigate("/login");
  else if (!(currentUser?.email == "fadinoumih18@gmail.com")) {
    navigate("/");
  }
  return <Outlet />;
};

export default MustBeAnAdmin;
