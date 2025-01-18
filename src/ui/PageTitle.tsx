// Interfaces Section :
interface PageTitleProps {
  title: string;
  description: string;
}

// Avoid Using custom-container class With This Component, It Already Includes Its Dimensions...
const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    // mx-[18px] my-[50px] xl:mx-5 xl:my-20 custom-2xl:mx-auto pb-[30px] xl:px-[60px] xl:pb-10 custom-2xl:px-[132px] custom-2xl:pb-[50px]
    <div className="border-b my-[50px] border-white/90 font-vietnam lg:my-[80px] custom-2xl:mt-[109px] custom-2xl:mb-[100px]">
      <div className="custom-container  xl:grid xl:grid-cols-2 xl:items-center xl:gap-20 custom-2xl:gap-[95px] mb-[30px] lg:mb-10 custom-2xl:mb-[50px]">
        <p className="mb-4 font-semibold xl:mb-0 text-grey/15 text-[28px] leading-[42px] xl:text-[38px] xl:leading-[57px] custom-2xl:text-[48px] custom-2xl:leading-[72px]">
          {title}
        </p>
        <p className="text-sm text-grey/35 xl:text-base custom-2xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageTitle;
