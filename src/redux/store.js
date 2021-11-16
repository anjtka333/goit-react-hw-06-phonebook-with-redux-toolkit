import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducerContacts } from "./contacts/contactsReducers";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: reducerContacts,
});

const store = configureStore({
  reducer: { contacts: reducerContacts },
  devTools: process.env.NODE_ENV !== "production", // => true || false
});

export default store;
