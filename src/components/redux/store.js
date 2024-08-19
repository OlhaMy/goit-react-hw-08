import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    tasks: contactsSlice,
    filters: filtersSlise,
  },
});
