import { useSelector } from "react-redux";
import { selectMarqueeCards } from "../redux/Slice/marqueeSlice";

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
            className="flex-shrink-0 w-2/5 rounded-lg sm:w-auto border-x-1 "
          >
            <img
              src={card.card}
              alt={`Card ${card.id}`}
              className="object-cover w-full h-full rounded-lg "
            />
          </div>
        ))}

        {/* Duplicate cards for smooth animation */}
        {cards.map((card) => (
          <div
            key={`duplicate-${card.id}`}
            className="flex-shrink-0 w-2/5 rounded-lg sm:w-auto border-x-1 "
          >
            <img
              src={card.card}
              alt={`Duplicate Card ${card.id}`}
              className="object-cover w-full h-full rounded-lg "
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueSlider
