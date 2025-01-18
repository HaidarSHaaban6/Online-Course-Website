interface CustomButtonProps {
  btnText: string;
  functionality: () => unknown;
  custom?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  btnText,
  functionality,
  custom = false, // Default To False If Not Passed
}) => {
  return (
    <button
      onClick={functionality}
      className={`${
        custom
          ? "bg-orange/50 text-white font-semibold hover:bg-orange/70"
          : "text-grey/15 font-medium bg-white/99 border border-white/95 hover:bg-white/95"
      } w-fit rounded-md custom-2xl:px-6 custom-2xl:py-[18px] px-5 py-[14px] custom-2xl:text-lg text-sm transition-colors`}
    >
      {btnText}
    </button>
  );
};

export default CustomButton;

// Example For Use :
//
//
// function test() {
//   console.log("object");
//   return "hi";
// }
//
//
// <CustomButton btnText="View Course" functionality={() => test()} />
//
// === or ===
//
// <CustomButton
// btnText="Login"
// custom={true}
// functionality={() => test()}
// />
