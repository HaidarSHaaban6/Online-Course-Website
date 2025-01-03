import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "../slice/authenticationSlice";

const store = configureStore({
  reducer: {
    auth: authenticationSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
