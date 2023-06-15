import { createSlice } from "@reduxjs/toolkit";

const newItemsSlice = createSlice({
  name: "newItems",
  initialState: {
    itemsArray: [],
  },
  reducers: {
    addNewItem(state, action) {
      const newItem = { value: action.payload };
      state.itemsArray.push(newItem);
    },
  },
});

export const newItemsActions = newItemsSlice.actions;

export default newItemsSlice;
