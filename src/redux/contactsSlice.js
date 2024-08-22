import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: { items: [], loading: false, error: null },
  filter: { name: "" },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
