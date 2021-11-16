import { ADD, DEL, FILTER, PUT } from "./contactsConstants";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction(ADD, (contact) => {
  return { payload: contact };
});

export const delContact = createAction(DEL, (id) => {
  return { payload: id };
});

export const addContacts = createAction(PUT, (contacts) => {
  return { payload: contacts };
});

export const putFilter = createAction(FILTER, (value) => {
  return { payload: value };
});
