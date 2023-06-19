import { createSlice } from "@reduxjs/toolkit";

const newItemsSlice = createSlice({
  name: "newItems",
  initialState: {
    itemsArray: [],
  },
  reducers: {
    addNewItem(state, action) {
      const newItem = {
        itemName: action.payload.itemName,
        price: action.payload.price,
        category: action.payload.category,
      };
      state.itemsArray = [...state.itemsArray, newItem];
      console.log(state.itemsArray);
    },
  },
});

export const newItemsActions = newItemsSlice.actions;

export default newItemsSlice;
