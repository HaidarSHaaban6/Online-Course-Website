import { ReactNode } from "react";

export interface ContactInfoCardProps {
  info: string;
  icons: ReactNode[];
}

const ContactInfoCard = ({ info, icons }: ContactInfoCardProps) => {
  return (
    <div className="grow bg-white/99 border border-white/95 rounded-md flex flex-col items-center justify-center py-7">
      <div className="flex itams-center justify-center mb-3.5 gap-x-2.5 custom-2xl:mb-5 custom-2xl:gap-x-3.5">
        {icons.map((icon, index) => (
          <div
            className="
            w-11 aspect-square bg-white/97 border border-white/95 rounded-md flex items-center justify-center text-xl text-grey/20
            custom-2xl:w-[52px] custom-2xl:text-2xl
            duration-300 hover:cursor-pointer hover:bg-white/95"
            key={index}
          >
            {icon}
          </div>
        ))}
      </div>
      <p className="text-center text-grey/30 cusotm-2xl:text-lg">{info}</p>
    </div>
  );
};

export default ContactInfoCard;
