import { useSelector } from "react-redux";
import { selectMarqueeCards } from "../redux/slice/marqueeSlice";

const MarqueSlider = () => {
    const cards = useSelector(selectMarqueeCards);
    
  return (
    <div
      className="overflow-hidden relative sm:mb-[100px] mb-[50px] bg-white rounded-lg"
    >
      <div className="flex animate-marquee lg:py-6 p-[10px]">
        
      {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 sm:w-auto w-2/5  border-x-1  rounded-lg  "
          >
            <img
              src={card.card}
              alt={`Card ${card.id}`}
              className="w-full  h-full object-cover  rounded-lg "
            />
          </div>
        ))}

        {/* Duplicate cards for smooth animation */}
        {cards.map((card) => (
          <div
            key={`duplicate-${card.id}`}
            className="flex-shrink-0 sm:w-auto w-2/5 border-x-1 rounded-lg "
          >
            <img
              src={card.card}
              alt={`Duplicate Card ${card.id}`}
              className=" w-full h-full  object-cover  rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueSlider
