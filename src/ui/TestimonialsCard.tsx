
interface TestimonialsCardProps {
  name: string;
  review: string;
  photo: string;
  className: string;
}

const TestimonialsCard = ({ name, review, photo, className }: TestimonialsCardProps) => {
  
  return (
    <div className={"bg-white border border-white/95 rounded-[10px] overflow-hidden duration-700 "+ className}
    >
      <div className="p-[30px] custom-2xl:p-[50px] custom-xl:p-10">
        <p className="text-grey/30 font-vietnam text-sm sm:text-base custom-2xl:text-lg">{review}</p>
      </div>
      <div className="bg-white/99 border-t border-white/95 flex items-center justify-between px-[30px] py-5 custom-2xl:px-[50px] custom-2xl:py-8 custom-xl:px-10 custom-xl:py-5">
        <div className="flex items-center gap-x-2.5 custom-2xl:gap-x-4">
          <div className="w-[50px] custom-2xl:w-[60px] aspect-square">
            <img
              src={photo}
              alt={name + " photo"} 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-base font-vietnam custom-2xl:text-lg">{name}</p>
        </div>
        <div className="px-4 py-3.5 font-medium font-vietnam text-sm custom-2xl:text-lg bg-white/97 border border-white/95 rounded-md hover:cursor-pointer">Read Full Story</div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
