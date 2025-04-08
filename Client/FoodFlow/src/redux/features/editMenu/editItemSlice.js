// import { createSlice } from "@reduxjs/toolkit";

// const editItemSlice = createSlice({
//   name: "editItem",
//   initialState: {
//     itemName: "",
//     category: "",
//     price: "",
//     image: "",
//     isAvailable: false,
//   },
//   reducers: {
//     setEditItem: (state, action) => {
//       return { ...state, ...action.payload };
//     },
//     resetEditItem: (state) => {
//       return {
//         itemName: "",
//         category: "",
//         price: "",
//         image: "",
//         isAvailable: false,
//       };
//     },
//     updateItem: (state, action) => {
//       const { originalItem, editedItem } = action.payload;
//       // Find the index of the original item in the array
//       const index = state.items.findIndex((item) => item === originalItem);
//       // Replace the item at that index with the edited item
//       state.items[index] = editedItem;
//     },
//   },
// });

// export const { setEditItem, resetEditItem, updateItem } = editItemSlice.actions;
// export const selectEditItem = (state) => state.editItem;
// export default editItemSlice.reducer;

// editItemSlice.js

import { createSlice } from "@reduxjs/toolkit";

const editItemSlice = createSlice({
  name: "editItem",
  initialState: {
    item: null,
  },
  reducers: {
    setEditItem: (state, action) => {
      state.item = action.payload;
    },
    resetEditItem: (state) => {
      state.item = null;
    },
  },
});

export const { setEditItem, resetEditItem } = editItemSlice.actions;
export default editItemSlice.reducer;
