import { createSlice } from "@reduxjs/toolkit";

export interface contactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialState: contactInfo[] = [];

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContactInfo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addContactInfo } = contactSlice.actions;
export default contactSlice;
