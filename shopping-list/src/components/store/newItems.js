import { createSlice } from "@reduxjs/toolkit";

const newItemsSlice = createSlice({
  name: "newItems",
  initialState: {},
  reducers: {},
});

export const newItems = newItemsSlice.actions;

export default newItemsSlice;
