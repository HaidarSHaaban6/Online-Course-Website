interface SectionTitleProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="grid sm:grid-cols-[73.7%_26.2%] mb-10 custom-xl:mb-[60px] custom-2xl:mb-[80px]">
      <div className="">
        <h2 className="text-[28px] custom-xl:text-[38px] custom-2xl:text-5xl font-semibold text-grey/15 custom-2xl:leading-[72px] custom-xl:leading-[57px] leading-[42px] custom-2xl:mb-[6px] mb-1">
          {title}
        </h2>
        <p className="text-sm custom-xl:text-base custom-2xl:text-lg text-grey/35">
          {description}
        </p>
      </div>
      <div className="flex items-end justify-start mt-5 sm:justify-end sm:mt-0">
        {children}
      </div>
    </div>
  );
};

export default SectionTitle;
