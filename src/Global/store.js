import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./actions";

export const store = configureStore({
  reducer: { myReducer },
});
