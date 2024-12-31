import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../data/interfaces";
import AuthService from "../../Services/AuthService";

export interface initialStateValues {
  users: User[];
  currentUser: User | null;
  error: User | null;
}

const initialState: initialStateValues = {
  users: [
    {
      fullName: "Fadi Noumih",
      email: "fadinoumih18@gmail.com",
      password: "12345678",
    },
  ],
  currentUser: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { errors, errorsExits } = AuthService.logUserIn(
        state.users,
        action.payload
      );
      if (errorsExits) state.error = errors;
      else {
        state.users.push(action.payload);
        state.currentUser = action.payload;
        state.error = null;
      }
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
    },
  },
});

export const { registerUser, signUserIn, logUserOut } = authSlice.actions;
export default authSlice;
