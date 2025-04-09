import React, { useEffect, useState, createElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/features/modal/modalSlice";
import { addMenu } from "@/redux/features/addMenu/addMenuSlice";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import MenuService from "@/services/MenuService";
import { MdCancel } from "react-icons/md";

export default function AddMenuModal({ handleCloseModal }) {
  const dispatch = useDispatch();
  const [batchClick, setBatchClick] = useState(0);
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    JSON.stringify({
      error: null,
      message: "",
    })
  );

  const [values, setValues] = useState({
    itemName: "",
    category: "",
    price: "",
    available: true,
    selectedPicture: "",
    batchid: "",
    procurementid: "",
  });

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
    setValues({ ...values, itemName: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setValues({ ...values, category: e.target.value });
  };

  const handleBatchIDChange = (e) => {
    setValues({ ...values, batchid: e.target.value });
  };

  const handleProcurementIDChange = (e) => {
    setValues({ ...values, procurementid: e.target.value });
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value, 10);
    if (!isNaN(newPrice)) {
      setValues({ ...values, price: newPrice });
    } else {
      setValues({ ...values, price: "" });
    }
  };

  const handleToggleAvailability = () => {
    setValues({ ...values, available: !values.available });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValues({
          ...values,
          selectedPicture: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setValues({
        ...values,
        selectedPicture: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    //console.log("Submitting form with values:", values);

    e.preventDefault();
    setErrorMessage(
      JSON.stringify({
        error: false,
        message: "",
      })
    );
    setLoading(true);

    const newData = {
      itemName: values.itemName,
      category: [values.category],
      price: values.price,
      available: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGxKvBa-AO7QPSClGlKkhqFMZcEea1pq5kpG4poOsAK9p6ZikmnI2BtJt79jgncNWGYQ&usqp=CAU",
    };

    //console.log("New data", newData);

    const newMenu = await MenuService.createMenu(newData);
    //console.log("API Response:", newMenu);

    if (newMenu.success) {
      setLoading(false);
      setErrorMessage(
        JSON.stringify({
          error: false,
          message: "",
        })
      );

      // Dispatch addMenu only once with the newData
      dispatch(addMenu(newData));

      handleCloseModal();
      dispatch(closeModal());
      //console.log(newMenu);
    } else if (newMenu.error) {
      setLoading(false);
      //console.log("Error creating menu item:", newMenu.error);

      setErrorMessage(
        JSON.stringify({
          error: true,
          message: newMenu.error.message,
        })
      );
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
    handleCloseModal();
  };

  const addBatchIdField = () => {
    setBatchClick(batchClick + 1);
  };

  // Event listener to close modal when clicking outside
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
    <aside
      id="close"
      className="pt-[14rem] pb-8 overflow-scroll w-[100%] fixed h-[100vh] boder flex items-center justify-center z-30 bg-black bg-opacity-50"
    >
      <div className="overflow-hidden relative bg-white p-6 rounded-lg w-[80%] h-[fit-content]">
        <div className="bg-white p-6 rounded-lg w-[808px] h-[709px] overflow-scroll">
          <div
            className="absolute z-40 text-4xl cursor-pointer right-[4rem]"
            onClick={handleClose}
          >
            <MdCancel />
          </div>
          <h2 className="text-xl font-semibold mb-4">Add Menu</h2>

          {JSON.parse(errorMessage).error && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! {JSON.parse(errorMessage).message}</span>
            </div>
          )}

          {JSON.parse(errorMessage).error === false && (
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Success! Menu created</span>
            </div>
          )}

          <div>
            {loading === true ? (
              <div className="w-[700px] h-[500px]">
                <div className="h-3/4 w-full flex justify-center content-center">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="menuForm">
                <div>
                  <div className="flex items-center p-3 gap-3">
                    <div className="border-secondary border bg-[#F5F7F9] rounded-lg h-[178px] w-[228px]">
                      {values.selectedPicture ? (
                        <img
                          src={values.selectedPicture}
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
                    </div>
                    <div className="border-secondary border rounded-lg h-[178px] w-[228px] text-center">
                      <label htmlFor="pictureInput" className="cursor-pointer">
                        {values.selectedPicture ? (
                          <div className="text-center w-full flex justify-center items-center h-full">
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
                              <p className="text-[13px] m-auto text-[#FFFFFF] bg-[#FFA902] mt-3 px-5 py-2 rounded-md w-[130px]">
                                Change image
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center w-full flex justify-center items-center h-full">
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
                              <p className="text-[13px] m-auto text-[#FFFFFF] bg-[#FFA902] mt-3 px-5 py-2 rounded-md w-[130px]">
                                Choose file
                              </p>
                            </div>
                          </div>
                        )}
                      </label>
                      <input
                        type="file"
                        id="pictureInput"
                        accept="image/*"
                        onChange={handlePictureChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Item Name:</label>
                  <input
                    type="text"
                    value={values.itemName}
                    onChange={handleItemNameChange}
                    className="border border-secondary rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Category:</label>
                  <select
                    value={values.category}
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
                    value={values.price}
                    onChange={handlePriceChange}
                    className="border border-secondary rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label className="block mb-2 mr-2">Availability:</label>
                  <div
                    className={`relative w-10 h-6 rounded-full cursor-pointer ${
                      values.available ? "bg-gray" : "bg-primary"
                    }`}
                    onClick={handleToggleAvailability}
                  >
                    <div
                      className={`absolute w-4 h-4 rounded-full m-1 transition-transform duration-300 ${
                        values.available ? "bg-white" : "bg-white"
                      }`}
                      style={{
                        transform: values.available
                          ? "translateX(0)"
                          : "translateX(100%)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center mb-5">
                  <label>Source batch 1: </label>
                  <div className="gap-3 flex">
                    <input
                      type="text"
                      placeholder="Enter Source batch ID"
                      className="border border-secondary rounded-lg p-2"
                      value={values.batchid}
                      onChange={handleBatchIDChange}
                    />
                    <input
                      type="text"
                      placeholder="Enter Procurement ID"
                      className="border border-secondary rounded-lg p-2"
                      value={values.procurementid}
                      onChange={handleProcurementIDChange}
                    />

                    <button
                      type="button"
                      onClick={addBatchIdField}
                      className="p-3 bg-primary rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>

                {batchClick >= 1 && (
                  <div className="flex items-center mb-5">
                    <label>Source batch 2: </label>
                    <div className="gap-3 flex">
                      <input
                        type="text"
                        placeholder="Enter Source batch ID"
                        className="border border-secondary rounded-lg p-2"
                      />
                      <input
                        type="text"
                        placeholder="Enter Procurement ID"
                        className="border border-secondary rounded-lg p-2"
                      />
                    </div>
                  </div>
                )}

                {batchClick >= 2 && (
                  <div className="flex items-center mb-5">
                    <label>Source batch 3: </label>
                    <div className="gap-3 flex">
                      <input
                        type="text"
                        placeholder="Enter Source batch ID"
                        className="border border-secondary rounded-lg p-2"
                      />
                      <input
                        type="text"
                        placeholder="Enter Procurement ID"
                        className="border border-secondary rounded-lg p-2"
                      />
                    </div>
                  </div>
                )}

                {batchClick >= 3 && (
                  <div className="flex items-center mb-5">
                    <label>Source batch 4: </label>
                    <div className="gap-3 flex">
                      <input
                        type="text"
                        placeholder="Enter Source batch ID"
                        className="border border-secondary rounded-lg p-2"
                      />
                      <input
                        type="text"
                        placeholder="Enter Procurement ID"
                        className="border border-secondary rounded-lg p-2"
                      />
                    </div>
                  </div>
                )}

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
                    Add item
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}