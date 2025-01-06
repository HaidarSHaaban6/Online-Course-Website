import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./../slice/authenticationSlice";
import coursesReducer from "./../slice/coursesSlice";
import benefitsReducer from "./../slice/benefitsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    courses: coursesReducer,
    benefit: benefitsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
