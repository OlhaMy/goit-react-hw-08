import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, deleteContact } from "./contactsSlice";

axios.defaults.baseURL = "https://66c6f372732bf1b79fa4b7b0.mockapi.io/";

export const fetchContactsThunk = createAsyncThunk(
  "fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("Contacts/fetchAll");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = (id) => async (dispatch) => {
  try {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    await axios.delete(`Contacts/${id}`);
    dispatch(deleteContact(id));
    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch(setIsError(true));
  }
};

export const addContactThunk = (body) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { data } = await axios.post("/Contacts", body);
    dispatch(addContact(data));
    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch(setIsError(true));
  }
};
