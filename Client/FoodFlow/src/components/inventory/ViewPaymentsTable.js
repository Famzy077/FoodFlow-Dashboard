import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { setSelectedItem } from "@/redux/features/selected_item/selectedItemSlice";
import Editform from '@/app/(pages)/kitchen/inventory/editform';
import { CircleCheck } from 'lucide-react';
import { useDispatch } from "react-redux";
import Image from 'next/image';

export default function ViewPayments({data}) {
    // const [tableData, setTableData] = useState(data);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [editInventory, setEditInventory] = useState(false);

    const dispatch = useDispatch();
    const modalRef = useRef(null);

      // Update the state with the new data

    const openModalForRow = (rowId) => {
      setSelectedRowId(rowId);
      const selectedItem = data.find((row) => row.id === rowId);
      dispatch(setSelectedItem(selectedItem));
      setIsEdit(true);
    };

    useEffect(() => {
      setIsEdit(false)
    },[editInventory])

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

  return (
    <>
         <div>
        <table className='w-full lg:overflow-hidden'>
          <thead className='border-b-2 border-b-zinc-300'>
            <tr>
            <th scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Order ID</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th  scope='col'
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
        
          <tbody  className="bg-white divide-y divide-gray-200 overflow-auto">
          {data.map((row, index) => (
              <tr key = {index} className='border-b-2'>
              <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.payId}</td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
              <div>
              <Image
              priority
              src='/images/inventory/Naira.svg'
              alt='naira icon'
              width={12}
              height={12}
              style={{width: '100%', height: 'auto'}}/>
              </div>
              {row.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 z-0 inline-flex text-xs leading-5 font-semibold rounded-lg ${
                    row.status === "receiving"
                      ? "bg-[#a5d4c3] text-[#049561] border border-[#049561] py-1 px-3"
                      : "bg-[#f3ca78] text-[#FFA902] border border-[#FFA902] py-1 px-5"
                  }`}
                >
                  {row.status}
                </span>
              </td>

              <td className="px-6 z-0 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button onClick={() => openModalForRow(row.id)}>
                <BsThreeDotsVertical />
              </button>

              {selectedRowId === row.id && isEdit && (
                <div className='absolute place-content-center shadow-lg bg-white z-50 left-[-5rem] py-3 flex flex-col top-[-2rem] space-y-2 items-start rounded-md pl-5 text-black w-[150px] text-sm'
                  ref={modalRef}>
                      <div className='flex justify-between items-center gap-4'>
                      <CircleCheck className='text-green-400'/>
                      <button 
                      onClick={()=> setEditInventory(true)}>
                      Received</button>
                      </div>
                
                      <div className='flex justify-between items-center gap-2'>
                      <Image
                      priority
                      src='/images/inventory/delete.svg'
                      alt='delete icon'
                      width='16'
                      height='18'/>
                      <button className='justify-end'>
                      Delete Item</button>
                      </div>

                </div>
              )}
            </td>
              </tr>
              ))}
          </tbody>
        </table>  
    </div>       

    <Editform isVisible={editInventory} onClose={()=> setEditInventory(false)}/>
    </>
  )
}
