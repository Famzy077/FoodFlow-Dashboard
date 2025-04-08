import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { closeModal } from "@/redux/features/modal/modalSlice";

export default function EditMenuModal({
  menuItem,
  handleCloseModal,
  onUpdateItem,
}) {
  const dispatch = useDispatch();

  const [editedValues, setEditedValues] = useState({ ...menuItem });

  useEffect(() => {
    setEditedValues({ ...menuItem });
  }, [menuItem]);

  const categories = [
    "Snacks",
    "Soup",
    "Staple Food",
    "Confectionaries",
    "Drinks",
    "Beef and Fish",
    "Diaries",
    "Sea Food",
  ];

  const handleItemNameChange = (e) => {
    setEditedValues({ ...editedValues, itemName: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setEditedValues({ ...editedValues, category: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedValues({ ...editedValues, selectedPicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value, 10);
    if (!isNaN(newPrice) && newPrice >= 0) {
      setEditedValues({ ...editedValues, price: newPrice });
    } else {
      setEditedValues({ ...editedValues, price: "" });
    }
  };

  const handleToggleAvailability = () => {
    setEditedValues({ ...editedValues, available: !editedValues.available });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateItem(editedValues);
    handleClose();
  };

  const handleClose = () => {
    dispatch(closeModal());
    handleCloseModal();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("bg-black")) {
        handleClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <aside className="top-[-9] bg-black bg-opacity-50 h-[fit-content] p-10 w-[650px] flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Menu</h2>
        <div>
          <div className="flex items-center p-3 gap-3">
            <div className="border-secondary border rounded-lg h-[178px] w-[228px]">
              <label htmlFor="pictureInput" className="cursor-pointer">
                {editedValues.selectedPicture ? (
                  <img
                    src={editedValues.selectedPicture}
                    alt="Selected"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center w-full flex justify-center items-center h-full">
                    <Image
                      className="m-auto"
                      priority
                      src="/images/icons/noUpload.png"
                      alt="card icon"
                      width="36"
                      height="36"
                    />
                  </div>
                )}
              </label>
              <input
                type="file"
                id="pictureInput"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <div className="text-center flex justify-center items-center h-[178px] w-[228px] border border-secondary rounded-lg">
              <div>
                <Image
                  className="m-auto"
                  priority
                  src="/images/icons/upload.png"
                  alt="card icon"
                  width="36"
                  height="36"
                />
                <p className="text-[15px] text-[#A3A3A3] mt-3">
                  Png Jpg and Gif files allowed
                </p>
                <button
                  onClick={() =>
                    document.getElementById("pictureInput").click()
                  }
                  className="text-[13px] m-auto text-[#FFFFFF] bg-[#FFA902] mt-3 px-5 py-2 rounded-md w-[130px]"
                >
                  Change image
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Item Name:</label>
              <input
                type="text"
                value={editedValues.itemName}
                onChange={handleItemNameChange}
                className="border border-secondary rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Category:</label>
              <select
                value={editedValues.category || ""}
                onChange={handleCategoryChange}
                className="border border-secondary rounded-lg p-2 w-full"
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Price (in Naira):</label>
              <input
                type="number"
                value={editedValues.price === "" ? "" : editedValues.price}
                onChange={handlePriceChange}
                className="border border-secondary rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block mb-2 mr-2">Availability:</label>
              <div
                className={`relative w-10 h-6 rounded-full cursor-pointer ${
                  editedValues.available ? "bg-primary" : "bg-gray"
                }`}
                onClick={handleToggleAvailability}
              >
                <div
                  className={`absolute w-4 h-4 rounded-full m-1 transition-transform duration-300 ${
                    editedValues.available ? "bg-white" : "bg-white"
                  }`}
                  style={{
                    transform: editedValues.available
                      ? "translateX(100%)"
                      : "translateX(0)",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <label>Source batch : </label>
              <div className="gap-3 flex">
                <input
                  type="text"
                  value={editedValues.batchid}
                  disabled
                  placeholder="Enter Source batch ID"
                  className="border border-secondary rounded-lg p-2"
                />
                <input
                  type="text"
                  value={editedValues.procurementid}
                  disabled
                  placeholder="Enter Procurement ID"
                  className="border border-secondary rounded-lg p-2"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
}
