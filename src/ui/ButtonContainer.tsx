interface ButtonContainerProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryButtonClick: () => unknown;
  onSecondaryButtonClick: () => unknown;
  isReversed?: boolean;
}

// Always The Orange Button is The Primary One ...

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  isReversed = false, // Default To False If Not Passed
}) => {
  return isReversed ? (
    <div>
      <button
        onClick={onSecondaryButtonClick}
        className="text-grey/30 w-fit custom-2xl:pr-[30px] custom-2xl:py-[14px] custom-xl:pr-[30px] py-3 pr-5 custom-2xl:text-lg text-sm"
      >
        {secondaryButtonText}
      </button>
      <button
        onClick={onPrimaryButtonClick}
        className="text-white rounded-md bg-orange/50 w-fit custom-2xl:px-[32px] custom-2xl:py-[14px] custom-xl:px-6 custom-xl:py-3 custom-2xl:text-lg text-sm"
      >
        {primaryButtonText}
      </button>
    </div>
  ) : (
    <div className="p-3 bg-white rounded-lg">
      <button
        onClick={onPrimaryButtonClick}
        className="font-semibold text-white rounded-md bg-orange/50 w-fit custom-2xl:px-[30px] custom-2xl:py-[14px] custom-xl:px-6 custom-xl:py-3 custom-2xl:text-lg text-sm"
      >
        {primaryButtonText}
      </button>
      <button
        onClick={onSecondaryButtonClick}
        className="font-semibold text-grey/30 w-fit custom-2xl:px-[30px] custom-2xl:py-[14px] custom-xl:px-6 custom-xl:py-3 custom-2xl:text-lg text-sm"
      >
        {secondaryButtonText}
      </button>
    </div>
  );
};

export default ButtonContainer;

// Example For Use :
//
//
// function test() {
//   console.log("object");
//   return "hi";
// }
//
//
// <ButtonContainer
//   primaryButtonText="Monthly"
//   secondaryButtonText="Yearly"
//   onPrimaryButtonClick={() => test()}
//   onSecondaryButtonClick={() => test()}
// />
//
// === or ===
//
// <ButtonContainer
//   primaryButtonText="Monthly"
//   secondaryButtonText="Yearly"
//   onPrimaryButtonClick={() => test()}
//   onSecondaryButtonClick={() => test()}  -- In This Case It Will Like Nav Buttons --
//   isReversed={true}
// />
