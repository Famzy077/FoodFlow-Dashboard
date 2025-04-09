import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { setSelectedItem } from "@/redux/features/selected_item/selectedItemSlice";
import Editform from "@/app/(pages)/kitchen/inventory/editform";
import { useDispatch } from "react-redux";
import Image from "next/image";
import InventoryService from "@/services/InventoryService";

export default function ViewInventory({ data }) {
  // const [tableData, setTableData] = useState(data);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editInventory, setEditInventory] = useState(false);
  const [dataDetail, setDataDetail] = useState(data || []); // Use data prop as initial state
  const [currentItem, setCurrentItem] = useState(null);
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  // Update the state with the new data

  const openModalForRow = (rowId) => {
    setSelectedRowId(rowId);
    const selectedItem = dataDetail.find((row) => row._id === rowId);
    //console.log("Selected item", selectedItem);
    setCurrentItem(JSON.stringify(selectedItem));
    dispatch(setSelectedItem(selectedItem));
    setIsEdit(true);
  };

  const handleDelete = (rowId) => {
    const newList = data.filter((row) => row._id !== rowId);
    setDataDetail(newList);
    //console.log("i am working");
  };

  useEffect(() => {
    setIsEdit(false);
  }, [editInventory]);

  useEffect(() => {
    async function fetchData() {
      if (true) {
        const data = await InventoryService?.inventories();

        if (data.success) {
          //console.log("New d", data);
          const successData = data.success;
          //console.log(successData, "Success data");
          setDataDetail(successData);
        } else {
          //console.log("Error fetching data");
        }
      }
    }

    // Only fetch if data is empty
    if (!data || data.length === 0) {
      fetchData();
    }
    // fetchData();
  }, [editInventory]);

  const closeModal = () => {
    setSelectedRowId(null);
    setIsEdit(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (isEdit) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isEdit]);

  const handleCloseEditModal = () => {
    setEditInventory(false);
  };

  return (
    <React.Fragment>
      <div>
        <table className='w-full'>
          <thead className='border-b-2 border-b-zinc-300'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                ID
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Inventory name
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Category
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Price
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Initial Quantity
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Current Quantity
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Quantity Alert
              </th>
            </tr>
          </thead>

          <tbody className='bg-white divide-y divide-gray-200 overflow-auto'>
            {dataDetail.length > 0 ? (
              dataDetail.map((row, index) => (
                <tr key={index} className='border-b-2'>
                  <td className='px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{row.name}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {row.categories}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>{row.price}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {row.quantity}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {row.quantity}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg ${
                        row.minimumAlert === true
                          ? "bg-[#a5d4c3] text-[#049561] border border-[#049561] py-1 px-3"
                          : "bg-[#e9a996] text-[#BA2D02] border border-[ #BA2D02] py-1 px-5"
                      }`}
                    >
                      {row.minimumAlert ? "available" : "alerted"}
                    </span>
                  </td>

                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <button onClick={() => openModalForRow(row._id)}>
                      <BsThreeDotsVertical />
                    </button>

                    {selectedRowId === row._id && isEdit && (
                      <div
                        className='absolute bg-white shadow-xl left-[90%] py-3 flex flex-col space-y-2 items-center rounded-md text-black w-[9%] text-sm'
                        ref={modalRef}
                      >
                        <div className='flex justify-between items-center gap-4'>
                          <Image
                            priority
                            src='/images/inventory/edit_icon.svg'
                            alt='edit icon'
                            width='20'
                            height='20'
                          />
                          <button onClick={() => setEditInventory(true)}>
                            Edit Item
                          </button>
                        </div>

                        <div className='flex justify-between items-center gap-2'>
                          <Image
                            priority
                            src='/images/inventory/delete.svg'
                            alt='delete icon'
                            width='16'
                            height='18'
                          />
                          <button
                            className='justify-end'
                            onClick={() => handleDelete(row._id)}
                          >
                            Delete Item
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='7' className='text-center py-4'>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Editform
        isVisible={editInventory}
        onClose={handleCloseEditModal}
        data={JSON.parse(currentItem)}
      />
    </React.Fragment>
  );
}
