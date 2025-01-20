import { createSlice } from "@reduxjs/toolkit";
import img1 from "/assets/img/marque/Card1.png" ;
import img2 from "/assets/img/marque/Card2.png" ;
import img3 from "/assets/img/marque/Card3.png" ;
import img4 from "/assets/img/marque/Card4.png" ;
import img5 from "/assets/img/marque/Card5.png" ;
import img6 from "/assets/img/marque/Card6.png" ;
import img7 from "/assets/img/marque/Card7.png" ;

interface MarqueeCard{
    id:number,
    card:string,
  } ;

interface MarqueeState {
  cards: MarqueeCard[];
}

const initialState: MarqueeState = {
  cards: [
    {
      id: 1,
      card: img1,
    },
    {
      id: 2,
      card: img2,
    },
    {
      id: 3,
      card: img3,
    },
    {
      id: 4,
      card: img4,
    },
    {
      id: 5,
      card: img5,
    },
    {
      id: 6,
      card: img6,
    },
    {
      id: 7,
      card: img7,
    },
  ],
};

const marqueeSlice = createSlice({
  name: "marquee",
  initialState,
  reducers: {},
});

export const selectMarqueeCards = (state: { marquee: MarqueeState }) =>
  state.marquee.cards;

export default marqueeSlice.reducer;
