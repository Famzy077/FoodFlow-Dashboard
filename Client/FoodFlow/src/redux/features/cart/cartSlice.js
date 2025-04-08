import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cartFromCookies = Cookies.get("cart");
const initialCartState = cartFromCookies
  ? JSON.parse(cartFromCookies)
  : {
      cartItems: [],
      amount: 0,
      total: 0,
    };
const initialState = { ...initialCartState };
// const initialState = {
//   cart: Cookies.get("cart")
//     ? JSON.parse(Cookies.get("cart"))
//     : {
//         cartItems: [],
//         amount: 0,
//         total: 0,
//       },
// };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          itemName: newItem.itemName,
          selectedPicture: newItem.selectedPicture,
        });
      }
      state.amount++;
      state.total = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      // Update cookies
      const updatedCart = {
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      };
      Cookies.set("cart", JSON.stringify(updatedCart));
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity++;
        item.totalPrice = item.price * item.quantity;
        state.amount++;
        state.total = state.cartItems.reduce(
          (total, item) => total + item.totalPrice,
          0
        )
      }
      // Update cookies
      const updatedCart = {
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      };
      Cookies.set("cart", JSON.stringify(updatedCart));
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity--;
        item.totalPrice = item.price * item.quantity;
        state.amount--;
        state.total = state.cartItems.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
      // Update cookies
      const updatedCart = {
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      };
      Cookies.set("cart", JSON.stringify(updatedCart));
    },
    deleteItem(state, action) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      // Update cookies
      const updatedCart = {
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      };
      Cookies.set("cart", JSON.stringify(updatedCart));
    },
    clearCart(state) {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
      Cookies.remove("cart");
    },

    initializeCartFromCookies(state) {
      const cartDataFromCookies = Cookies.get("cart");
      if (cartDataFromCookies) {
        try {
          const parsedCartData = JSON.parse(cartDataFromCookies);
          Object.assign(state, parsedCartData);
        } catch (error) {
          console.error("Error parsing cart data from cookies:", error);
        }
      }
    },
  },
});

export const {
  addToCart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  initializeCartFromCookies,
} = cartSlice.actions;

export default cartSlice.reducer;
