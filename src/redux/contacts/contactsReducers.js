// import { combineReducers } from "redux";
import { ADD, DEL, FILTER, PUT } from "./contactsConstants";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContact,
  addContacts,
  delContact,
  putFilter,
} from "./contactsActions";

// const stepReducerIncr = createReducer(10, {
//   [changeStepIncr]: (_, action) => {
//     console.log("action :>> ", action);
//     return action.payload;
//   },
// });

const reducerItems =
  ([],
  {
    [addContact]: (state, { payload }) => {
      return [...state, payload];
    },

    [delContact]: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
    [addContacts]: (_, { payload }) => {
      return payload;
    },
  });

const reducerFilter =
  ("",
  {
    [putFilter]: (_, { payload }) => payload,
  });

// const reducerItems = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];
//     case DEL:
//       return state.filter((item) => item.id !== payload);
//     case PUT:
//       return payload;
//     default:
//       return state;
//   }
// };

// const reducerFilter = (state = "", { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export const reducerContacts = combineReducers({
  items: reducerItems,
  filter: reducerFilter,
});
