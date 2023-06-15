import { configureStore } from "@reduxjs/toolkit";

import newItemsSlice from "./newItems";

const store = configureStore({
  reducer: { newItem: newItemsSlice.reducer },
});

export default store;
