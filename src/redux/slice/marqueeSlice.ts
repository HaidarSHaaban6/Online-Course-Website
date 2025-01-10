import { createSlice } from "@reduxjs/toolkit";

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
      card: "src/assets/img/marque/Card1.png",
    },
    {
      id: 2,
      card: "src/assets/img/marque/Card2.png",
    },
    {
      id: 3,
      card: "src/assets/img/marque/Card3.png",
    },
    {
      id: 4,
      card: "src/assets/img/marque/Card4.png",
    },
    {
      id: 5,
      card: "src/assets/img/marque/Card5.png",
    },
    {
      id: 6,
      card: "src/assets/img/marque/Card6.png",
    },
    {
      id: 7,
      card: "src/assets/img/marque/Card7.png",
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
