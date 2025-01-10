import { createSlice } from "@reduxjs/toolkit";
import benefits from "../../data/Benifits";

// Define The Structure For Benefit Information
export interface BenefitType {
  id: number;
  title: string;
  description: string;
}

// Define The State Structure For Benefits
interface BenefitState {
  benefits: BenefitType[];
  mainBenefitData: BenefitType[];
  allBenefitData: BenefitType[];
}

// Initialize The State With Imported Benefits Data
const initialState: BenefitState = {
  benefits,
  mainBenefitData: [],
  allBenefitData: [],
};

// Create The Slice For Benefits State Management
const benefitsSlice = createSlice({
  name: "benefits",
  initialState,
  reducers: {
    // Get The First 6 Benefits Data
    getMainBenefitData(state) {
      state.mainBenefitData = state.benefits.slice(0, 6);
    },
    // Get All Benefits Data
    getAllBenefitData(state) {
      state.allBenefitData = state.benefits;
    },
  },
});

export const { getMainBenefitData, getAllBenefitData } = benefitsSlice.actions;

export default benefitsSlice.reducer;
