import { createSlice } from "@reduxjs/toolkit";

export interface contactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
export interface MessagesInfo {
  id: number;
  contactInfo: contactInfo;
}

const initialState: MessagesInfo[] = [
  {
    id: 2,
    contactInfo: {
      firstName: "Amina",
      lastName: "Khalil",
      email: "amina.khalil@outlook.com",
      phone: "+1234567890",
      subject: "Request for Technical Support",
      message:
        "I am having trouble with the latest software update. Can you please provide assistance? Thank you.",
    },
  },
  {
    id: 1,
    contactInfo: {
      firstName: "Fadi",
      lastName: "Noumih",
      email: "fadinoumih@gmail.com",
      phone: "+963935741791",
      subject: "New Course Needed",
      message:
        "i would be happy if there is a new AI courses that will help me improve my skills, lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, aliquam expedita! Rem maxime similique sit, aliquam, iusto quis at cupiditate culpa nisi eum explicabo voluptatem delectus mollitia assumenda neque laboriosam?",
    },
  },
];

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContactInfo: (state, action) => {
      state.unshift({
        id: state.length + 1,
        contactInfo: action.payload,
      });
    },
    deleteContactInfo: (state, action) => {
      const contactId = action.payload;
      const index = state.findIndex((contact) => contact.id === contactId);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addContactInfo, deleteContactInfo } = contactSlice.actions;
export default contactSlice;
