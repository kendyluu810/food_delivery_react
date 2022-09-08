import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    CartUi: cartUiSlice.reducer
  },
});

export default Store;
