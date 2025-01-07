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
    {
      fullName: "Haidar Shabaan",
      email: "haidarshabaaan@gmail.com",
      password: "12345678",
    },
    {
      fullName: "Hala Alhassanieh",
      email: "halaalhassanieh@gmail.com",
      password: "12345678",
    },
  ],
  currentUser: null,
  error: null,
};

// if there is a user stored in the localstorage add it to the state and remember the user
const addCurrentUserIfExists = () => {
  const currentUser = AuthService.getRememberedUser();
  if (currentUser) {
    initialState.currentUser = currentUser;
    const userExist = initialState.users.find(
      (u) => currentUser.email == u.email
    );
    if (!userExist) initialState.users.push(currentUser);
  }
};
addCurrentUserIfExists();

const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      // validating the fields
      const { errors, errorsExits } = AuthService.SignUserUn(
        state.users,
        action.payload
      );

      // set the errors if exist or add the new user if not
      if (errorsExits) state.error = errors;
      else {
        state.users.push(action.payload);
        state.currentUser = action.payload;
        state.error = null;

        //remembering the user
        AuthService.rememberUser(action.payload);
      }
    },
    signUserIn: (state, action) => {
      const user: User = action.payload.user;
      const { errors, errorsExits } = AuthService.logUserIn(
        user.email,
        user.password
      );
      if (errorsExits) {
        state.error = errors;
      } else {
        state.error = null;
        const userData: User | undefined = state.users.find(
          (u) => user.email === u.email && user.password === u.password
        );
        if (userData) {
          state.currentUser = userData;
          if (action.payload.rememberMe) {
            AuthService.rememberUser(userData);
          }
        } else throw new Error("email or password is not valid");
      }
    },
    logUserOut: (state) => {
      state.currentUser = null;
      AuthService.logRememberedUserOut();
    },
    resetErrors: (state) => {
      state.error = null;
    },
  },
});

export const { registerUser, signUserIn, logUserOut, resetErrors } =
  authenticationSlice.actions;
export default authenticationSlice;
