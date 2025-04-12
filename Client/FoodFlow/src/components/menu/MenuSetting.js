"use client";
import React, { useState, useEffect } from "react";
import { MdFilterList } from "react-icons/md";
import MenuCard from "./MenuCard";
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import AddMenuModal from "./AddMenuModal";
import { categoriesSettings } from "../../utils/categoriesData";
import FilterModal from "./FilterModal";
import MenuService from "@/services/MenuService";
import { addMenu, resetState, setMenuitemIds } from "@/redux/features/addMenu/addMenuSlice"; // Import setMenuitemIds

export default function MenuSetting() {
  const dispatch = useDispatch();
  const addMenuItems = useSelector((store) => store.addMenu);

  // Log the addMenuItems data for debugging
  //console.log("addMenuItems:", addMenuItems);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [addedItems, setAddedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState(""); // State for search keyword
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  // Fetch menu items
  useEffect(() => {
    const fetchMenuitemIds = async () => {
      try {
        const menuitemIds = await MenuService.menus();
        dispatch(setMenuitemIds(menuitemIds)); // Dispatch the setMenuitemIds action
      } catch (error) {
        console.error("Failed to fetch menu itemIds:", error);
      }
    };

    fetchMenuitemIds();
  }, [dispatch]);

  // Filter items based on the selected category and search keyword
  const filteredItems = addMenuItems.filter((item) => {
    // Convert item.category to a string and handle cases where it's undefined or null
    const itemCategory = String(item.category || "").trim().toLowerCase();
    const selectedCategoryNormalized = selectedCategory.trim().toLowerCase();

    const matchesCategory =
      selectedCategory === "All" || itemCategory === selectedCategoryNormalized;

    const matchesSearchKeyword =
      searchKeyword === "" ||
      item.itemName.toLowerCase().includes(searchKeyword.toLowerCase());

    return matchesCategory && matchesSearchKeyword;
  });

  // Generate menu cards for the filtered items
  const generateMenuCards = () => {
    return filteredItems.map((item, i) => <MenuCard key={i} menuItem={item} />);
  };

  const menuList = generateMenuCards();

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMenuItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const currentPageCount = Math.min(currentPage, pageCount);

  // Handle opening the add menu modal
  const handleOpenModal = () => {
    dispatch(openModal()); // Open the modal using Redux (if needed)
    setIsModalOpen(true);
  };

  // Handle closing the add menu modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle opening the filter modal
  const handleOpenModalFilter = () => {
    dispatch(openModal()); // Open the modal using Redux (if needed)
    setIsFilterModalOpen(true); // Set the filter modal state to open
  };

  // Handle closing the filter modal
  const handleCloseModalFilter = () => {
    setIsFilterModalOpen(false);
  };

  // Handle adding a new menu item
  const handleAddItem = (newItem) => {
    dispatch(addMenu(newItem)); // Dispatch the addMenu action to update the Redux store
    setAddedItems((prevItems) => [...prevItems, newItem]); // Update the local addedItems state
  };

  // Paginate function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex relative z-0 flex-col border w-[98%] h-[fit-content] border-secondary rounded-lg px-5">
      <div className="font-semibold absolute -top-14 leading-none">
        <h1 className="text-3xl font-bold flex itemIds-center">Menu</h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold p-2">My Menu items</div>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search menu"
          className="border border-secondary rounded-[40px] w-[280px] h-[37px] p-2 outline-none focus:ring-2 focus:ring-primary"
          value={searchKeyword} // Bind the input value to searchKeyword state
          onChange={(e) => setSearchKeyword(e.target.value)} // Update searchKeyword when typing
        />
        <button onClick={handleOpenModalFilter}>
          <div className="border border-secondary rounded-[40px] w-[130px] h-[37px] cursor-pointer flex items-center justify-center text-secondary">
            <MdFilterList size={30} color="grey" />
            <span>Filter</span>
          </div>
        </button>
      </div>
      <div className="p-2 flex justify-between items-center">
        <div className="flex">
          {categoriesSettings.map((category) => (
            <div
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.name);
                setCurrentPage(1); // Reset to the first page when changing category
              }}
              className={`px-3 text-xl py-2 my-2 rounded-lg mx-2 w-full whitespace-nowrap shadow-lg cursor-pointer ${
                selectedCategory === category.name
                  ? "bg-primary text-white"
                  : "text-primary"
              }`}
            >
              {category.name}
            </div>
          ))}
        </div>

        <button
          className="flex items-center gap-2 bg-primary p-[15px] rounded-lg px-8 text-white font-bold"
          onClick={handleOpenModal}
        >
          <span>+</span>
          <span className="text-sm">Add Menu</span>
        </button>
      </div>
      <div className={`grid z-10 menuCard gap-4 mb-1 w-[90%]`}>
        {menuList}
      </div>
      <div className="flex justify-between px-2 mt-4">
        <div>
          Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredItems.length)} of {filteredItems.length}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredItems.length}
          currentPage={currentPageCount}
          pageCount={pageCount}
          paginate={paginate}
        />
      </div>
      {isFilterModalOpen && (
        <FilterModal handleCloseModalFilter={handleCloseModalFilter} />
      )}
      {isModalOpen && (
        <AddMenuModal
          handleCloseModal={handleCloseModal}
          handleAddItem={handleAddItem} // Pass the handleAddItem function to AddMenuModal
        />
      )}
    </div>
  );
}

// Pagination component
const Pagination = ({ currentPage, pageCount, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="z-0">
      <ul className="flex z-0">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-2 mr-1 cursor-pointer${
              currentPage === number ? "font-semibold border border-primary" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};