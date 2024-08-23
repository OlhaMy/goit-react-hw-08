import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContactThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContactThunk.rejected, (state, action) => {
        state.isError = action.payload;
      });
  },
});
