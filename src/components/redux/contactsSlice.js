import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts:[],
  numbers: [],

    }

    const slice = createSlice({
        name: "contacts",
        initialState,
        reducers:{
        addContacts:(state, action) =>{
state.contacts.push(action.payload);
        },
    }
    })
export const contactsReducer = slice.reducer;
export const (addContacts) = slice.actions;

// У файлі contactsSlice.js оголоси слайс контактів, використовуючи функцію createSlice().

// Екшени слайса для використання в dispatch:

// addContact - додавання нового контакту до властивості items
// deleteContact - видалення контакту за id з властивості items

// Оголоси функції-селектори для використання в useSelector:

// selectContacts - повертає список контактів з властивості items.

// З файла слайса експортуй редюсер, а також його екшени і селектори.
