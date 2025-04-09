import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InventoryService from "@/services/InventoryService";
// import { trusted } from "mongoose";

export default function Editform({ isVisible, onClose, data }) {
  if (!isVisible) return null;

  const router = useRouter();

  //console.log("Is visible", isVisible);
  const [details, setDetails] = useState({
    name: data.name,
    categories: data.category,
    brand: data.brand,
    quantity: data.quantity,
    price: data.price,
    minimumAlert: data.minimumAlert,
  });

  const [minimumInventory, setMinimumInventory] = useState(data.minimumAlert);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    JSON.stringify({
      error: null,
      message: "",
    })
  );

  const handleMinimumChange = (e) => {
    if (minimumInventory === false) {
      setMinimumInventory(true);
    } else if (minimumInventory === true) {
      setMinimumInventory(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(e);
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrorMessage(
    //   JSON.stringify({
    //     error: false,
    //     message: "",
    //   })
    // );
    setLoading(true);
    //console.log(details);
    const newData = {
      // name: details.name,
      category: details.category,
      brand: details.brand,
      price: details.price,
      quantity: `${parseInt(details.quantity)}`,
      minimumAlert: minimumInventory,
    };

    const newInventory = await InventoryService.updateInventory(
      data._id,
      newData
    );

    if (newInventory.success) {
      setLoading(false);
      //console.log(newInventory);
      setErrorMessage(
        JSON.stringify({
          error: false,
          message: "",
        })
      );
    } else if (newInventory.error) {
      setLoading(false);
      //console.log("Error", newInventory.error);
      setErrorMessage(
        JSON.stringify({
          error: true,
          message: newInventory.error.message,
        })
      );
    } else {
      alert("Error");
    }
  };

  //console.log("D", data);
  return (
    <div className="absolute inset-0 bg-black bg-opacity-25">
      <div className="absolute bg-white left-[23%] top-[18%] flex flex-col rounded-lg space-y-7 px-5 py-6">
        <div className=" flex items-center justify-between">
          <p className="text-2xl font-semibold"> Edit Inventory</p>

          <button onClick={onClose}>
            <Image
              priority
              src="/images/inventory/close_icon.svg"
              alt="view icon"
              width="24"
              height="24"
            />
          </button>
        </div>

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
            <span>Your inventory has been updated</span>
          </div>
        )}

        {/*---------------------FORM STARTS HERE--------------*/}

        {loading === true ? (
          <div className="w-[700px] h-[500px]">
            <div className="h-3/4 w-full flex justify-center content-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* <div className="flex space-x-1 p-2">
              <label htmlFor="id" className="items-start justify-center p-2">
                Inventory Id:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                disabled={true}
                defaultValue={data.name}
                placeholder="input type name"
                onChange={handleChange}
                className="border place-items-center font-mono w-[20vw] p-2"
              />
            </div> */}

            <div className="flex space-x-1 p-2">
              <label htmlFor="name" className="items-start justify-center p-2">
                Item name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={data.name}
                placeholder="input type name"
                onChange={handleChange}
                className="border place-items-center font-mono w-[20vw] p-2"
              />
            </div>

            <div className="flex space-x-4 p-2">
              <label
                htmlFor="category"
                className="items-start justify-center p-2"
              >
                Category:
              </label>
              <select
                name="category"
                id="category"
                onChange={handleChange}
                className="border place-items-center font-mono w-[20vw] p-2 ml-4 block bg-white focus:ring-primary focus:border-primary"
              >
                <option defaultValue="select category">select category</option>
                <option value="grocery">Groceries and seasonings</option>
                <option value="flour">Flour based supplies</option>
                <option value="grain">Grain food</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruit">Fruits</option>
                <option value="meat">Meat and chicken</option>
                <option value="tuber">Tubers</option>
                <option value="dairy">Dairy products</option>
                <option value="egg">Egg</option>
                <option value="oil">Oils</option>
                <option value="cereal">Cereals</option>
                <option value="fish">Fish</option>
              </select>
            </div>

            <div className="flex space-x-10 p-2">
              <label htmlFor="brand" className="items-start justify-center p-2">
                Brand:
              </label>
              <input
                type="text"
                name="brand"
                placeholder="input brand name"
                onChange={handleChange}
                className="border place-items-center font-mono w-[20vw] p-2"
              />
            </div>

            <div className="flex justify-between space-x-5 p-2">
              <label
                htmlFor="quantity"
                className="items-start justify-center p-2"
              >
                Quantity:
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="input number"
                defaultValue={data.quantity}
                onChange={handleChange}
                className="border items-end font-mono w-[20vw] p-2"
              />

              <select
                name="unit"
                onChange={handleChange}
                className="border font-mono w-[20vw] p-2 block"
                data-dropdown-toggle="dropdown"
              >
                <option defaultValue="select unit">select unit</option>
                <option value="bag">Bag</option>
                <option value="litre">Litres(l)</option>
                <option value="grams">Gram(g)</option>
                <option value="kilo">Kilograms(kg)</option>
                <option value="sachet">Sachets</option>
                <option value="pound">Pound(9libs)</option>
                <option value="tuber">Tubers</option>
                <option value="ounz">Ounze(oz)</option>
                <option value="tonne">Tonne</option>
                <option value="cups">Cup</option>
                <option value="basket">Basket</option>
              </select>
            </div>

            <div className="flex space-x-11 p-2">
              <label htmlFor="price" className="items-start justify-center p-2">
                Price:
              </label>
              <input
                type="number"
                name="price"
                defaultValue={data.price}
                placeholder="input amount"
                onChange={handleChange}
                className="border place-items-center font-mono w-[20vw] p-2 "
              />
            </div>

            <div className="space-x-2">
              <input
                type="checkbox"
                name="checkbox"
                className="p-1"
                onClick={handleMinimumChange}
                defaultChecked={data.minimumAlert}
              />
              <label htmlFor="checkbox" className="text-lg font-bold">
                Set minimum inventory alert notification
              </label>
            </div>

            {minimumInventory && (
              <div className="flex justify-between space-x-5 p-2">
                <label
                  htmlFor="minimumQuantity"
                  className="items-start justify-center p-2"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  name="minimumQuantity"
                  placeholder="input number"
                  onChange={handleChange}
                  className="border items-end font-mono w-[20vw] p-2"
                />

                <select
                  name="unit"
                  className="border font-mono w-[20vw] p-2 block"
                  data-dropdown-toggle="dropdown"
                  disabled
                  defaultValue={details.unit ? "here" : "f"}
                >
                  <option defaultValue={details.unit ? "here" : "f"}>
                    {details.unit ? details.unit : ""}
                  </option>
                </select>
              </div>
            )}

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-primary p-2 w-[15vw] rounded-lg text-white"
              >
                {" "}
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
