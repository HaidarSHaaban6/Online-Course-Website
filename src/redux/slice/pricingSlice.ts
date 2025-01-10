// src/redux/slice/pricingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pricing, Pricing } from "../../data/Pricing"; 

interface PricingState {
  plans: Pricing[];
  Features:featureType[];
}

interface featureType{
  name:string;
  avalibility:boolean;
}

const initialState: PricingState = {
  plans: pricing,
  Features:[], // Initialize with the pricing array
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    // Add any additional actions if needed
    setPlans: (state, action: PayloadAction<Pricing[]>) => {
      // state.plans = action.payload;
      // state.Features=state.plans.map((item)=>({Features:item.Features}))
    },
  },
});

export const { setPlans } = pricingSlice.actions;

export default pricingSlice.reducer;
