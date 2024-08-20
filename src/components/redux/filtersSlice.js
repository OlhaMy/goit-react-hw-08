import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setNameFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setNameFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filter.filter;
// export const filterSlice = filterSlice.reducer;
