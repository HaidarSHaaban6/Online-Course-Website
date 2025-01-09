import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./../Slice/authenticationSlice";
import coursesReducer from "./../Slice/coursesSlice";
import benefitsReducer from "./../Slice/benefitsSlice";
import contactSlice from "../Slice/contactFormSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    courses: coursesReducer,
    benefit: benefitsReducer,
    contact: contactSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
