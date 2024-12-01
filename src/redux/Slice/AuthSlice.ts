import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../data/interfaces";

interface initialStateValues {
  users: User[];
  currentUser: User | null;
}

const initialState: initialStateValues = {
  users: [
    {
        fullName: "Fadi Noumih",
        email: "fadinoumih18@gmail.com",
        password: "12345678"
    }
  ],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    signUserIn: (state, action) => {
      const user: User = action.payload;
      const userData: User | undefined = state.users.find(
        (u) => user.email === u.email && user.password === u.password
      );
      if (userData) state.currentUser = userData;
      else throw new Error("email or password is not valid");
    },
    logUserOut: (state) => {
        state.currentUser = null;
    }
  },
});

export const {registerUser, signUserIn, logUserOut} = authSlice.actions;
export default authSlice