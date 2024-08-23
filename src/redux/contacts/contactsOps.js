import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://66c6f372732bf1b79fa4b7b0.mockapi.io/",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/Contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await instance.post("/Contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/Contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (id, thunkAPI) => {
      const isLoading = thunkAPI.getState().contacts.loading;
      if (isLoading) {
        return false;
      }
    },
  }
);
