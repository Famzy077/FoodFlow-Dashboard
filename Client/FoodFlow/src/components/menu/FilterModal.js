import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { categories } from "../../utils/categoriesData";
import { closeModal } from "@/redux/features/modal/modalSlice";

export default function FilterModal({ handleCloseModalFilter }) {
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFilterClose = () => {
    // //console.log("closing modal: " + handleOpenModalFilter);
    dispatch(closeModal());
    handleCloseModalFilter();
  };

  //event listener to close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("bg-black")) {
        handleFilterClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="absolute h-[fit-content] rounded-lg inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[450px] h-[fit-content] m-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Filter</h1>
          <button
            onClick={handleFilterClose}
           className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            X
          </button>
        </div>
        <p classsName="mt-14">filter category</p>
        <div className="flex flex-wrap gap-5 pr-[2rem] mt-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className="h-48px border py-[8px] px-[14px] rounded-[100px] hover:bg-primary transition duration-300"
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="mt-5">
          <p>Filter Search</p>
          <input
            type="text"
            placeholder="Search Keyword"
            className="border border-secondary rounded-[40px] p-2 outline-none focus:ring-2 focus:ring-primary mt-2"
          />
        </div>
        <div className="mt-5">
          <p>Filter Date</p>
          <div className="flex gap-5 mt-2">
            <div>
              <span className="mr-2">From</span>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="border border-secondary rounded-[40px] p-2 outline-none focus:ring-2 focus:ring-primary mt-2"
              />
            </div>
            <div>
              <span className="mr-2">To</span>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="border border-secondary rounded-[40px] p-2 outline-none focus:ring-2 focus:ring-primary mt-2"
              />
            </div>
          </div>
        </div>
        <div className="bg-primary justify-center cursor-pointer text-center mt-10 border border-secondary rounded-lg p-1 hover:text-white">
          <button className="text-2xl font-semibold">Filter</button>
        </div>
      </div>
    </div>
  );
}