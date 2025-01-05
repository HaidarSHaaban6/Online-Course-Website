import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./../Slice/authSlice";
import coursesReducer from "./../Slice/coursesSlice";
import benefitsReducer from "./../Slice/benefitsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    courses: coursesReducer,
    benefit: benefitsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
