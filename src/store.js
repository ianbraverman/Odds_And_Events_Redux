import { configureStore } from "@reduxjs/toolkit";
import sortingReducer from "./features/theNumbers/sortingSlice";

const store = configureStore({
  reducer: {
    sorting: sortingReducer,
  },
});
export default store;
