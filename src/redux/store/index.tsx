import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authenticationSlice";
import coursesReducer from "../slice/coursesSlice";
import benefitsReducer from "../slice/benefitsSlice";
import marqueeReducer from "../slice/marqueeSlice";
import pricingReducer from "../slice/pricingSlice";
import contactSlice from "../slice/contactFormSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    courses: coursesReducer,
    benefit: benefitsReducer,
    marquee: marqueeReducer,
    pricing: pricingReducer,
    contact: contactSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
