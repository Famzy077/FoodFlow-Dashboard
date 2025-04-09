import { createSlice } from "@reduxjs/toolkit";
import { setCookie, getCookie, removeCookie } from "../../../../cookieService";

const initialState = [];

const addMenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenu: (state, action) => {
      try {
        state.push(action.payload);
        setCookie("menuData", JSON.stringify(state));
      } catch (error) {
        console.error("Error adding menu item:", error);
      }
    },

    editMenu: (state, action) => {
      const {
        id,
        itemName,
        category,
        price,
        available,
        selectedPicture,
        batchid,
        procurementid,
      } = action.payload;

      const menuToUpdate = state.find((menu) => menu.id === id);
      if (menuToUpdate) {
        menuToUpdate.itemName = itemName;
        menuToUpdate.category = category;
        menuToUpdate.price = price;
        menuToUpdate.available = available;
        menuToUpdate.selectedPicture = selectedPicture;
        menuToUpdate.batchid = batchid;
        menuToUpdate.procurementid = procurementid;
      }

      try {
        setCookie("menuData", JSON.stringify(state));
      } catch (error) {
        console.error("Error updating menu item:", error);
      }
    },

    deleteMenu: (state, action) => {
      const { _id } = action.payload;
    
      // Log the id and state for debugging
      //console.log("Deleting item with _id:", _id);
      //console.log("Current state before deletion:", state);
    
      // Filter out the item with the matching id
      // const updatedState = state.filter((item) => item._id !== id);
      const updatedState = state.filter((item) => String(item._id) !== String(_id));
    
      // Log the updated state for debugging
      //console.log("Updated state after deletion:", updatedState);
    
      try {
        if (updatedState.length === 0) {
          removeCookie("menuData");
        } else {
          setCookie("menuData", JSON.stringify(updatedState));
        }
      } catch (error) {
        console.error("Error deleting menu item:", error);
      }
    
      return updatedState;
    },

    resetState: () => initialState,

    initializeMenuFromCookies(state) {
      try {
        const menuDataFromCookies = getCookie("menuData");
        if (menuDataFromCookies) {
          const parsedMenuData = JSON.parse(menuDataFromCookies);
          return parsedMenuData;
        }
      } catch (error) {
        console.error("Error parsing menu data from cookies:", error);
      }
      return state;
    },

    // Add the setMenuitemIds action
    setMenuitemIds: (state, action) => {
      try {
        // Replace the entire state with the fetched menu item IDs
        return action.payload;
      } catch (error) {
        console.error("Error setting menu item IDs:", error);
      }
    },
  },
});

export const {
  addMenu,
  editMenu,
  deleteMenu,
  resetState,
  initializeMenuFromCookies,
  setMenuitemIds, // Export the new action
} = addMenuSlice.actions;
export default addMenuSlice.reducer;