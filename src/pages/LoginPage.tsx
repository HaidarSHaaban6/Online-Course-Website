import { useEffect, useState } from "react";
import AuthForm from "../ui/AuthForm";
import StudentsTestimonials from "../components/StudentsTestimonials";
import LabeledInput from "../ui/LabeledInput";
import Checkbox from "../ui/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { resetErrors, signUserIn } from "../redux/slice/authenticationSlice";

export interface LogInData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage = () => {
  const [logInError, setLogInError] = useState<string>("");
  const [logIn, setLogIn] = useState<LogInData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const error = useSelector((state: RootState) => state.auth.error);

  const handleLogIn = () => {
    console.log("");

    try {
      dispatch(
        signUserIn({
          user: {
            email: logIn.email,
            password: logIn.password,
          },
          rememberMe: logIn.rememberMe,
        })
      );
      setLogInError("");
    } catch (error: any) {
      setLogInError(error.message);
      dispatch(resetErrors());
    }
  };

  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser]);
  useEffect(() => {
    dispatch(resetErrors());
  }, []);

  return (
    <div className="custom-container">
      <div className="flex py-[50px] lg:py-[80px] custom-2xl:py-[100px] flex-wrap">
        <div className="w-full lg:w-[55%] relative order-2 lg:order-1">
          <div className="sticky top-28 pt-[50px] lg:pt-0">
            <StudentsTestimonials />
          </div>
        </div>
        <div className="w-full lg:w-[45%] order-1 lg:order-2 lg:pl-20 custom-2xl:pl-[100px]">
          <AuthForm
            title="Log In"
            subTitle="Welcome back! Please log in to access your account."
            buttonText="Login"
            linkText="Log In"
            link="/signUp"
            linkPrefixText="Don’t have an account? "
            handleOnclick={handleLogIn}
          >
            <div className="flex flex-col gap-y-5 custom-2xl:gap-y-6">
              {logInError && (
                <p className="font-vietnam text-base font-normal text-red-500">
                  {logInError}
                </p>
              )}
              <LabeledInput<LogInData>
                name="email"
                label="Email"
                placeholder="Enter Your Email"
                inputType="email"
                error={error?.email || ""}
                data={logIn.email}
                setData={setLogIn}
              />
              <LabeledInput<LogInData>
                name="password"
                label="Password"
                placeholder="Enter Your Password"
                inputType="password"
                error={error?.password || ""}
                data={logIn.password}
                setData={setLogIn}
              />
              <p className="text-end font-base font-vietnam hover:cursor-pointer">
                Forgot Password?
              </p>
              <Checkbox<LogInData>
                text={
                  <p className="font-vietnam text-base font-normal text-grey/40">
                    Remember Me
                  </p>
                }
                name="rememberMe"
                error=""
                data={logIn.rememberMe}
                setData={setLogIn}
              />
            </div>
          </AuthForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
