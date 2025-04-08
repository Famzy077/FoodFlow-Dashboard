import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
  },
  reducers: {
    updateItem: (state, action) => {
      const { originalItem, editedItem } = action.payload;

      // Find index of originalItem in the array
      const index = state.items.findIndex(
        (item) => item.id === originalItem.id
      );

      // Create a new array with the edited item replacing the original
      state.items = [
        ...state.items.slice(0, index),
        editedItem,
        ...state.items.slice(index + 1),
      ];
    },
  },
});

export const { updateItem } = menuSlice.actions;
export default menuSlice.reducer;
