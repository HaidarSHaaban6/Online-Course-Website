// Interfaces Section :
interface PageTitleProps {
  title: string;
  description: string;
}

// Avoid Using custom-container class With This Component, It Already Includes Its Dimensions...
const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <div className="font-vietnam my-[50px] lg:my-[80px] custom-2xl:mt-[109px] custom-2xl:mb-[100px]">
      <div className="custom-container  xl:grid xl:grid-cols-2 xl:items-center xl:gap-20 custom-2xl:gap-[95px] mb-[30px] lg:mb-10 custom-2xl:mb-[50px]">
        <p className="mb-4 font-semibold xl:mb-0 text-grey/15 text-[28px] leading-[42px] xl:text-[38px] xl:leading-[57px] custom-2xl:text-[48px] custom-2xl:leading-[72px]">
          {title}
        </p>
        <p className="text-sm text-grey/35 xl:text-base custom-2xl:text-lg">
          {description}
        </p>
      </div>
      <div className="h-[1px] bg-white/90 mx-4 lg:mx-5 custom-2xl:mx-[30px]"></div>
    </div>
  );
};

export default PageTitle;
