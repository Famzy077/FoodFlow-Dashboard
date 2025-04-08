"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { closeModal, openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import Create_Procurement_order from "./Create_Procurement_order"; // Import the Create_Procurement_order component

export default function Procurement_manager_modal({ handleCloseModal }) {
  const dispatch = useDispatch();
  const [isCreateProcurementModalOpen, setIsCreateProcurementModalOpen] =
    useState(false);

  const handleClose = () => {
    dispatch(closeModal());
    handleCloseModal();
  };

  const handleOpenProcurementModal = () => {
    dispatch(openModal());
    setIsCreateProcurementModalOpen(true);
  };

  const handleCloseProcurementModal = () => {
    setIsCreateProcurementModalOpen(false);
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
    <aside className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="absolute bg-white left-[87%] top-[14%] flex flex-col rounded-lg p-1 w-[188px] h-[80px] text-center justify-between border border-secondary ">
        <button
          className="hover:bg-secondary hover:rounded-lg"
          onClick={handleOpenProcurementModal}
        >
          <p className="flex">
            <span className="ml-1">+</span>{" "}
            <span className="ml-2"> Create Procurement </span>
          </p>
        </button>
        <hr className="text-secondary" />
        <Link href="/kitchen/procurement/procurement_view_inventory">
          <button className="hover:bg-secondary hover:rounded-lg">
            <p className="flex">
              <span className="ml-1">-</span>{" "}
              <span className="ml-2"> View Procurement </span>
            </p>
          </button>
        </Link>
      </div>
      {isCreateProcurementModalOpen && (
        <Create_Procurement_order
          handleCloseProcurementModal={handleCloseProcurementModal}
          handleClose={handleClose}
        />
      )}
    </aside>
  );
}
