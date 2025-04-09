import React, { useEffect, useState } from "react";
import { closeModal } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { defectReportData } from "../../../utils/defectReportData";

export default function DefectReportModal({ handleCloseDefectModal }) {
  const dispatch = useDispatch();
  const [defectForm, setDefectForm] = useState({
    title: "",
    quantity: "",
    date: "",
    description: "",
  });

  const handleClose = () => {
    dispatch(closeModal());
    handleCloseDefectModal();
  };

  const handleDefectFormChange = (e) => {
    const { name, value } = e.target;

    const newValue =
      name === "quantity" ? Math.max(0, parseInt(value) || 0) : value;

    setDefectForm({
      ...defectForm,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send the form
    if (defectForm.title) {
      defectReportData.push(defectForm);
    }
    //console.log(defectForm);
    handleClose();
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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[729px] h-[500px] mb-16">
        <h1 className="font-bold">Defect Report</h1>
        <form className="flex flex-col gap-2 p-3" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font-medium">Title of defect:</label>
            <input
              type="text"
              className="border border-secondary w-[300px] h-[43px]"
              value={defectForm.title}
              onChange={handleDefectFormChange}
              name="title"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Quantity affected:</label>
            <input
              type="number"
              className="border border-secondary w-[300px] h-[43px]"
              value={defectForm.quantity}
              onChange={handleDefectFormChange}
              name="quantity"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Report date:</label>
            <input
              type="date"
              className="border border-secondary w-[300px] h-[43px]"
              value={defectForm.date}
              onChange={handleDefectFormChange}
              name="date"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Description:</label>
            <textarea
              className="border border-secondary w-[300px] h-[87px]"
              value={defectForm.description}
              onChange={handleDefectFormChange}
              name="description"
            ></textarea>
          </div>

          <div className="flex justify-center mt-7">
            <button className="bg-primary rounded-lg px-4 py-2 shadow-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
