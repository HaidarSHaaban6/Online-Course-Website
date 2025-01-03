// Interfaces Section :
interface PageTitleProps {
  title: string;
  description: string;
}

// Avoid Using custom-container class With This Component, It Already Includes Its Dimensions...
const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <div className="mx-[18px] my-[50px] custom-xl:mx-5 custom-xl:my-20 custom-2xl:mx-auto custom-2xl:mt-[109px] custom-2xl:mb-[100px] pb-[30px] custom-xl:px-[60px] custom-xl:pb-10 custom-2xl:px-[132px] custom-2xl:pb-[50px] custom-xl:grid custom-xl:grid-cols-2 custom-xl:items-center custom-xl:gap-20 custom-2xl:gap-[100px] max-w-[1860px] border-b border-white/90">
      <p className="mb-4 font-semibold custom-xl:mb-0 text-grey/15 text-[28px] leading-[42px] custom-xl:text-[38px] custom-xl:leading-[57px] custom-2xl:text-[48px] custom-2xl:leading-[72px]">
        {title}
      </p>
      <p className="text-sm text-grey/35 custom-xl:text-base custom-2xl:text-lg">
        {description}
      </p>
    </div>
  );
};

export default PageTitle;
