import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducerContacts } from "./contacts/contactsReducers";

const rootReducer = combineReducers({
  contacts: reducerContacts,
});

const store = configureStore({
  reducer: { contacts: reducerContacts },
  devTools: process.env.NODE_ENV !== "production", // => true || false
});

export default store;
