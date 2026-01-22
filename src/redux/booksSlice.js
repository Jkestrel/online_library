import { createSlice } from "@reduxjs/toolkit";
import { booksData } from "../data/booksData";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: booksData,
  },
  reducers: {
    addBook: (state, action) => {
      // Add new book at the beginning
      state.list.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
