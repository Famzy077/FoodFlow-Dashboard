import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    dicountType: null,
    discountValue: 0,
  },
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    setValue: (state, action) => {
      //console.log("Action", action.payload);
      state.value = action.payload;
    },
    resetValue: (state, action) => {
      state.value = 0;
    },
  },
});

export const { setValue, resetValue } = discountSlice.actions;

export default discountSlice.reducer;
