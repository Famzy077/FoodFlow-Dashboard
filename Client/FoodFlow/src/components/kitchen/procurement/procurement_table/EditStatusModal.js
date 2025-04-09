import React, { useState } from "react";
//react icons
import { TfiClose } from "react-icons/tfi";

export default function EditStatusModal({
  handleCloseEditStatusModal,
  initialStatus,
  updateStatus,
}) {
  const [newStatus, setNewStatus] = useState(initialStatus);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleStatusChange = (status) => {
    setNewStatus(status);
    setConfirmationMessage("New status selected!!!");
    setTimeout(() => {
      setConfirmationMessage("");
    }, 1000);
  };
  const handleConfirm = () => {
    //console.log(`Updated status: ${newStatus}`);
    updateStatus(newStatus);
    handleCloseEditStatusModal();
  };

  // const statusMessage =
  //   newStatus === "pending"
  //     ? "Pending status selected."
  //     : "Delivered status selected.";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/2 min-h-[50%] mb-16">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Edit Procurement Status</h1>
          <button onClick={handleCloseEditStatusModal}>
            <TfiClose className="font-bold text-lg" />
          </button>
        </div>
        <div className="font-medium mt-5 capitalize">
          choose procurement status
        </div>
        <div className="flex flex-col mt-10 gap-3">
          <label
            onClick={() => handleStatusChange("pending")}
            className="flex items-center gap-3"
          >
            <div
              className={` w-5 h-5 rounded-full flex border justify-center items-center ${newStatus == "pending" ? "bg-primary border-primary" : "border-[#D9D9D9]"}`}
            >
              <div className="bg-white w-3 h-3 rounded-full"></div>
            </div>
            {/* <input
              type="radio"
              value="pending"
              checked={newStatus === "pending"}
              onChange={handleStatusChange}
            /> */}
            Pending
          </label>
          <label
            onClick={() => handleStatusChange("delivered")}
            className="flex items-center gap-3"
          >
            <div
              className={` w-5 h-5 rounded-full flex border justify-center items-center ${newStatus == "delivered" ? "bg-primary border-primary" : "border-[#D9D9D9]"}`}
            >
              <div className="bg-white w-3 h-3 rounded-full"></div>
            </div>
            Delivered
          </label>
        </div>
        {/* <p>{statusMessage}</p> */}
        {confirmationMessage && (
          <p className="mt-10 border bg-green-800 rounded-lg text-center text-white p-3 font-medium">
            {confirmationMessage}
          </p>
        )}

        <div className="justify-center flex">
          <button
            className="border bg-primary border-primary w-[194px] transition-all ease-in-out duration-200 hover:scale-105 text-center text-white p-3 rounded-lg mt-5"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
