import utils from "./serviceUtils";

const { apiUrls, proccessReq } = utils;

const InventoryService = {};

InventoryService.inventories = async () => {
  try{
    const getInventories = await proccessReq(apiUrls.inventoryUrl, "GET");
    return getInventories;
  }catch(error){
    throw error
  }
};

InventoryService.createInventory = async (body) => {
  try{
    const createInventory = await proccessReq(apiUrls.inventoryUrl, "POST", body);
  return createInventory;
  }catch(error){
    throw error
  }
};

InventoryService.updateInventory = async (id, body) => {
  try{
    const updateInventory = await proccessReq(
      `${apiUrls.inventoryUrl}/${id}`,
      "PATCH",
      body
    );
    return updateInventory;
  }catch(error){
    throw error
  }
};
export default InventoryService;
