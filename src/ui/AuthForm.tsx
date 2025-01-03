import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import googleIcon from "./../assets/img/Icon.png";

interface AuthFormProps {
  title: string;
  subTitle: string;
  buttonText: string;
  linkText: string;
  link: string;
  linkPrefixText: string;
  children: React.ReactNode;
  handleOnclick: () => void;
}

const AuthForm = ({
  title,
  subTitle,
  buttonText,
  linkText,
  link,
  linkPrefixText,
  children,
  handleOnclick,
}: AuthFormProps) => {
  return (
    <div className="p-[30px] bg-white rounded-[10px] custom-lg:p-10 custom-2xl:p-[50px]">
      <div className="text-center mb-[30px] custom-lg:mb-10 custom-2xl:mb-[50px]">
        <h1 className="font-semibold font-vietnam text-[28px] lg:text-[38px] custom-2xl:text-5xl custom-2xl:mb-3 mb-2">
          {title}
        </h1>
        <p className="text-base custom-2xl:text-lg text-grey/30">{subTitle}</p>
      </div>
      <div>
        <div>
          <div>
            {/* the inputs required */}
            {children}
            <button
              className="w-full bg-orange/50 py-3.5 text-white text-sm text-center rounded-lg mt-5 mb-6 custom-2xl:mb-8 duration-200 hover:bg-orange/70 custom-2xl:py-[18px] custom-2xl:text-lg"
              onClick={handleOnclick}
            >
              {buttonText}
            </button>
            <div className="flex items-center">
              <div className="grow h-px bg-white/90"></div>
              <p className="mx-3 text-sm text-grey/60 custom-2xl:text-lg">OR</p>
              <div className="grow h-px bg-white/90"></div>
            </div>
            <div
              className="w-full py-3.5 mt-6 custom-2xl:mt-8 flex items-center justify-center rounded-lg bg-white/97 border border-white/95 duration-200
            hover:cursor-pointer hover:bg-white/95 custom-2xl:py-5"
            >
              <img src={googleIcon} alt="Google Icon" className="mr-3.5" />
              <p className="text-sm text-grey/15 custom-2xl:text-lg">
                Sign Up with Google
              </p>
            </div>
            <div className="mt-6 custom-2xl:mt-8 flex items-center justify-center gap-x-2.5">
              <p className="text-grey/15">
                {linkPrefixText}{" "}
                <Link to={link} className="underline">
                  {linkText}
                </Link>
              </p>
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
