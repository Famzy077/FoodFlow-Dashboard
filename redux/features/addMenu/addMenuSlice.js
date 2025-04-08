import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addMenuItems: [],
};

const addMenuSlice = createSlice({
  name: 'addMenu',
  initialState,
  reducers: {
    addMenu: (state, action) => {
      state.addMenuItems.push(action.payload);
    },
    editMenu: (state, action) => {
      const index = state.addMenuItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.addMenuItems[index] = action.payload;
      }
    },
    deleteMenu: (state, action) => {
      state.addMenuItems = state.addMenuItems.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addMenu, editMenu, deleteMenu } = addMenuSlice.actions;
export default addMenuSlice.reducer;
