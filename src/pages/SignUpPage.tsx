import { useEffect, useState } from "react";
import StudentsTestimonials from "../components/StudentsTestimonials";
import AuthForm from "../ui/AuthForm";
import LabeledInput from "../ui/LabeledInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import Checkbox from "../ui/Checkbox";
import { registerUser, resetErrors } from "../redux/slice/authenticationSlice";

export interface SignUpData {
  fullname: string;
  email: string;
  password: string;
  agreeForTermsAndConditions: boolean;
}

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    fullname: "",
    email: "",
    password: "",
    agreeForTermsAndConditions: false,
  });
  const [agreeError, setAgreeError] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const error = useSelector((state: RootState) => state.auth.error);
  const handleRegister = () => {
    if (!signUpData.agreeForTermsAndConditions) {
      setAgreeError("you should agree for the terms and conditions");
    } else {
      dispatch(
        registerUser({
          fullName: signUpData.fullname,
          email: signUpData.email,
          password: signUpData.password,
        })
      );
      setAgreeError("");
    }
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
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
            title="Sign Up"
            subTitle="Create an account to unlock exclusive features."
            buttonText="Sign Up"
            linkText="Log In"
            link="/logIn"
            linkPrefixText="Already have an account? "
            handleOnclick={handleRegister}
          >
            <div className="flex flex-col gap-y-5 custom-2xl:gap-y-6">
              <LabeledInput<SignUpData>
                name="fullname"
                label="First Name"
                placeholder="Enter Your First Name"
                inputType="text"
                error={error?.fullName ? error.fullName : ""}
                setData={setSignUpData}
                data={signUpData.fullname}
              />
              <LabeledInput<SignUpData>
                name="email"
                label="Email"
                placeholder="Enter Your Email"
                inputType="email"
                error={error?.email ? error.email : ""}
                setData={setSignUpData}
                data={signUpData.email}
              />
              <LabeledInput<SignUpData>
                name="password"
                label="Password"
                placeholder="Enter Your Password"
                inputType="password"
                error={error?.password ? error.password : ""}
                setData={setSignUpData}
                data={signUpData.password}
              />
              <Checkbox<SignUpData>
                text={
                  <span className="font-vietnam text-base font-normal text-grey/40">
                    I agree with <span className="underline">Terms of Use</span>{" "}
                    and <span className="underline">Privacy Policy</span>
                  </span>
                }
                data={signUpData.agreeForTermsAndConditions}
                name="agreeForTermsAndConditions"
                setData={setSignUpData}
                error={agreeError}
              />
            </div>
          </AuthForm>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
