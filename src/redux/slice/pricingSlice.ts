import { createSlice } from "@reduxjs/toolkit";
import pricing, { Pricing } from "../../data/Pricing";

interface PricingState {
  plans: Pricing[];
  monthlyPlansData: Pricing[];
  yearlyPlansData: Pricing[];
}

const initialState: PricingState = {
  plans: pricing,
  monthlyPlansData: [],
  yearlyPlansData: [],
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    getMonthlyPlans: (state) => {
      state.monthlyPlansData = state.plans.filter(
        (item: Pricing) => item.isMonth
      );
    },
    getYearlyPlans: (state) => {
      state.yearlyPlansData = state.plans.filter(
        (item: Pricing) => item.isYear
      );
    },
  },
});

export const { getMonthlyPlans, getYearlyPlans } = pricingSlice.actions;

export default pricingSlice.reducer;
