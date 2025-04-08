import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {
  initializeCartFromCookies,
} from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import selectedItemReducer from "./features/selected_item/selectedItemSlice";
import addMenuReducer, {
  initializeMenuFromCookies,
} from "./features/addMenu/addMenuSlice";
import discountReducer from "./features/discountSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    selectedItem: selectedItemReducer,
    addMenu: addMenuReducer,
    discount: discountReducer,
  },
});

(async () => {
  try {
    await store.dispatch(initializeCartFromCookies());
    await store.dispatch(initializeMenuFromCookies());
  } catch (error) {
    console.error("Error initializing cart from cookies:", error);
  }
})();
