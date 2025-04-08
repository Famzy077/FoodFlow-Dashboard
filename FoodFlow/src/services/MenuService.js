import utils from "./serviceUtils";

const { apiUrls, proccessReq } = utils;

const allMenu = "/menu/me"; // Endpoint to fetch all menus for the current user
const menu = "/menu"; // Endpoint for general menu operations

const MenuService = {};

/**
 * Fetch all menus for the current user
 * @returns {Promise<Array>} - Array of menu items
 */
MenuService.menus = async () => {
  try {
    const getMenu = await proccessReq(allMenu, "GET");
    return getMenu; // Ensure the backend returns an array of menu items
  } catch (error) {
    console.error("Error fetching menus:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

/**
 * Fetch a single menu item by ID
 * @param {string} id - The ID of the menu item
 * @returns {Promise<Object>} - The menu item object
 */
MenuService.singleItem = async (id) => {
  if (!id) {
    throw new Error("ID is required to fetch a single menu item");
  }

  try {
    const getItem = await proccessReq(`${menu}/${id}`, "GET");
    return getItem; // Ensure the backend returns a single menu item object
  } catch (error) {
    console.error("Error fetching single menu item:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

/**
 * Create a new menu item
 * @param {Object} body - The data for the new menu item
 * @returns {Promise<Object>} - The created menu item object
 */
MenuService.createMenu = async (body) => {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid body provided for creating a menu item");
  }

  try {
    const createMenu = await proccessReq(menu, "POST", body);
    return createMenu; // Ensure the backend returns the created menu item
  } catch (error) {
    console.error("Error creating menu item:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

/**
 * Update an existing menu item
 * @param {string} id - The ID of the menu item to update
 * @param {Object} body - The updated data for the menu item
 * @returns {Promise<Object>} - The updated menu item object
 */
MenuService.updateMenu = async (id, body) => {
  if (!id) {
    throw new Error("ID is required to update a menu item");
  }
  if (!body || typeof body !== "object") {
    throw new Error("Invalid body provided for updating a menu item");
  }

  try {
    const updateMenu = await proccessReq(`${menu}/${id}`, "PATCH", body);
    return updateMenu; // Ensure the backend returns the updated menu item
  } catch (error) {
    console.error("Error updating menu item:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

export default MenuService;