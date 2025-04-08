import apiClient from './AxiosApiClient';

const MenuService = {
  createMenu: async (menuData) => {
    try {
      const response = await apiClient.post('/menu', menuData);
      return response.data;
    } catch (error) {
      console.error('Error creating menu:', error);
      return { success: false, error: error.response.data };
    }
  },
  // Additional methods for fetching, updating, and deleting menu items can be added here
};

export default MenuService;
