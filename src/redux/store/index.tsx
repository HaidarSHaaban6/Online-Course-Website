import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./../slice/authenticationSlice";
import coursesReducer from "./../slice/coursesSlice";
import benefitsReducer from "./../slice/benefitsSlice";
import contactSlice from "../slice/contactFormSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    courses: coursesReducer,
    benefit: benefitsReducer,
    contact: contactSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
