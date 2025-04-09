import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { setSelectedItem } from "@/redux/features/selected_item/selectedItemSlice";
import Editform from "@/app/(pages)/kitchen/inventory/editform";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";

export default function ViewClient({ data }) {
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editInventory, setEditInventory] = useState(false);
  const [dataDetail, setDataDetail] = useState(data);

  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const openModalForRow = (rowId) => {
    //console.log("Row ID clicked:", rowId); // Debugging
    setSelectedRowId(rowId); // Set the selected row ID
    const selectedItem = data.find((row) => row.id === rowId); // Find the selected item
    dispatch(setSelectedItem(selectedItem)); // Dispatch the selected item to Redux (if needed)
    setIsEdit(true); // Open the modal
  };

  const handleDelete = (rowId) => {
    const newList = data.filter((row) => row.id !== rowId);
    setDataDetail(newList);
    //console.log("Item deleted:", rowId); // Debugging
  };

  const closeModal = () => {
    setSelectedRowId(null); // Reset the selected row ID
    setIsEdit(false); // Close the modal
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal(); // Close the modal if clicked outside
      }
    };
    if (isEdit) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEdit]);

  return (
    <React.Fragment>
      <div>
        <table className="w-[fit-content]">
          <thead className="border-b-2 z-40 border-b-zinc-300 sticky top-0 bg-white w-[90%]">
            <tr>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Inventory name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Initial Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity Alert
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>

          <tbody className="bg- divide-y h-[fit-content] divide-gray-200 overflow-auto">
          {dataDetail.map((row) => (
                <tr key={`${row.id}-${row.inventoryname}-${row.category}`}> {/* Unique key */}
                  <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.inventoryname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.brand}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.initialquantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.currentquantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg ${
                        row.quantityalert === "available"
                          ? "bg-[#a5d4c3] text-[#049561] border border-[#049561] py-1 px-3"
                          : "bg-[#e9a996] text-[#BA2D02] border border-[ #BA2D02] py-1 px-5"
                      }`}
                    >
                      {row.quantityalert}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => openModalForRow(row.id)}>
                      <BsThreeDotsVertical />
                    </button>

                    {selectedRowId === row.id && isEdit && (
                      <div
                        ref={modalRef}
                        className="absolute top-2 left-[-5rem] w-[10rem] flex flex-col space-y-1 items-center rounded-md text-black text-sm"
                      >
                        <main className="bg-white  border border-zinc-300 rounded-lg shadow-2xl py-2 px-3 z-50">
                          <div className="flex justify-between items-center gap-4">
                            <Image
                              priority
                              src="/images/inventory/delete.svg"
                              alt="edit icon"
                              width="20"
                              height="20"
                            />
                            <button onClick={() => handleDelete(row.id)}>
                              Delete Client
                            </button>
                          </div>

                          <div className="flex justify-between items-center gap-2">
                            <Image
                              priority
                              src="/images/inventory/edit_icon.svg"
                              alt="delete icon"
                              width="16"
                              height="18"
                            />
                            <Link href="/kitchen/client/view_details_clients">
                              <button className="justify-end">View Details</button>
                            </Link>
                          </div>
                        </main>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
             </tbody>
            </table>
          </div>

      <Editform
        isVisible={editInventory}
        onClose={() => setEditInventory(false)}
      />
    </React.Fragment>
  );
}