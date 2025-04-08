import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
//react icons
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
//selectedItem slice
import { setSelectedItem } from "@/redux/features/selected_item/selectedItemSlice";
import { useDispatch } from "react-redux";
//components
import ProcurementTableHead from "./ProcurementTableHead";
import EditStatusModal from "./EditStatusModal";
// redux
import { openModal } from "@/redux/features/modal/modalSlice";

export default function ViewProcurementTable({ data }) {
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditStatusModalOpen, setIsEditStatusModalOpen] = useState(false);
  const [editingStatus, setEditingStatus] = useState(null);
  const [nextStatus, setNextStatus] = useState(null);
  const [tableData, setTableData] = useState(data);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust the number of items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleEditStatusModalOpen = (status) => {
    dispatch(openModal());
    setIsEditStatusModalOpen(true);
    setIsModalOpen(false);
    setEditingStatus(status);
    setNextStatus(["pending", "delivered"]);
  };

  const handleUpdateStatus = (newStatus) => {
    const updatedData = tableData.map((item) =>
      item.id === selectedRowId ? { ...item, status: newStatus } : item
    );

    setTableData(updatedData);
    setIsEditStatusModalOpen(false);
  };

  const handleEditStatusModalClose = () => {
    setIsEditStatusModalOpen(false);
  };

  const openModalForRow = (rowId) => {
    setSelectedRowId(rowId);
    const selectedItem = data.find((item) => item.id === rowId);
    dispatch(setSelectedItem(selectedItem));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRowId(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  // Pagination logic
  const currentPageData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full mt-10 overflow-scroll">
      <table className="min-w-full divide-y divide-gray-200 overflow-scroll">
        <ProcurementTableHead />
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 &&
            currentPageData.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize text-sm font-semibold">
                  {item.itemName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize text-sm font-semibold">
                  {item.brand}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                  {item.quantityNumber}({item.quantityUnit})
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                  {item.recipientEmail}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg capitalize ${
                      item.status === "successful"
                        ? "bg-green-100 text-green-800 border border-green-800 p-1"
                        : "bg-[#FFA9024F] text-[#FFA902] border border-[#FFA902] p-1"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => openModalForRow(item.id)}>
                    <BsThreeDotsVertical />
                  </button>
                  {selectedRowId === item.id && isModalOpen && (
                    <div
                      className="absolute rounded-lg shadow-xl border border-secondary bg-white p-3 flex flex-col gap-2"
                      ref={modalRef}
                    >
                      <button
                        className="flex items-center gap-2"
                        onClick={() => handleEditStatusModalOpen(item.status)}
                      >
                        <MdOutlineModeEditOutline />{" "}
                        <span className="font-medium">Edit status</span>
                      </button>
                      <button className="flex items-center gap-2">
                        <RiDeleteBin6Line />{" "}
                        <span className="font-medium">Delete order</span>
                      </button>
                      <Link
                        href={`/kitchen/procurement/procurement_report/${item.id}`}
                      >
                        <button className="flex items-center gap-2">
                          <CiCircleMore />{" "}
                          <span className="font-medium">View details</span>
                        </button>
                      </Link>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          {data.length == 0 && (
            <tr>
              <td
                className="px-6 py-4 whitespace-nowrap text-center justify-center w-full"
                colSpan={7}
              >
                No items found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isEditStatusModalOpen && (
        <EditStatusModal
          handleCloseEditStatusModal={handleEditStatusModalClose}
          initialStatus={editingStatus}
          nextStatus={nextStatus}
          updateStatus={handleUpdateStatus}
        />
      )}

      {data.length > 0 && (
        <div className="flex justify-end items-center mt-4 w-full">
          <div className="flex justify-end gap-2">
            <button>Previous</button>
            <div className="flex gap-1">
              <button className="bg-[#FFA902] text-white w-7 h-7 rounded-md flex justify-center items-center">
                1
              </button>
              {/* <button className="text-[#FFA902] border border-[#FFA902] bg-white w-7 h-7 rounded-md flex justify-center items-center">
              2
            </button> */}
            </div>
            <button>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
