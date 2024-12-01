import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./../slice/coursesSlice"; // المسار الخاص بك

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
