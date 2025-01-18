interface SectionTitleProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  custom?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  children,
  custom = false,
}) => {
  return (
    <div
      className={`font-vietnam grid lg:grid-cols-[73.7%_26.2%] ${
        custom
          ? "mb-6 custom-2xl:mb-[30px]"
          : "mb-10 custom-xl:mb-[60px] custom-2xl:mb-[80px]"
      }`}
    >
      <div>
        <h2
          className={`font-semibold text-grey/15 ${
            custom
              ? "custom-2xl:mb-[10px] mb-[6px] text-lg custom-xl:text-xl custom-2xl:text-2xl"
              : "text-[28px] custom-xl:text-[38px] custom-2xl:text-5xl custom-2xl:leading-[72px] custom-xl:leading-[57px] leading-[42px] custom-2xl:mb-[6px] mb-1"
          }`}
        >
          {title}
        </h2>
        <p className="text-sm custom-xl:text-base custom-2xl:text-lg text-grey/35">
          {description}
        </p>
      </div>
      <div className="flex items-end justify-start mt-5 lg:justify-end lg:mt-0">
        {children}
      </div>
    </div>
  );
};

export default SectionTitle;