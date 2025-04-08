import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from 'next/image';
import CurrencyFormatter from '../../utils/formatCurrency';

const InvoiceTableModal = ({info, setInfo}) => {
    const [isEdit, setIsEdit] = useState(false);
    const modalRef = useRef(null);

    const openModalForRow = () => {
        setIsEdit(true);
    }
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

      const closeModal = () => {
        setIsEdit(false);
      };
    
  const handleDelete =(id) => {
 const newList = info.filter((_, index) => index !== id)
 setInfo(newList)
  }

    return (
        <>
            <div>
                <table  className='w-full lg:overflow-hidden'>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='border border-zinc-400'>
                        {info.map((row,ind)=>(
                        <tr key={ind}>
                        <td className="pl-8 py-4 whitespace-nowrap"> 
                            <input type='checkbox' name='tickbox' className='w-[18px] h-[18px]'/>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">#{ind + 1}</td>
                        <td className="px-2 py-4 whitespace-nowrap">{row.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.quantity}</td>
                        <td className="px-2 py-4 whitespace-nowrap"> <CurrencyFormatter value={row.amount} /> </td>
                        <td className="px-2 py-4 whitespace-nowrap text-left text-sm font-medium ">
                            <button onClick={() => openModalForRow(ind + 1)}>
                                <BsThreeDotsVertical />
                            </button>

                            {isEdit && (
                                <div className='absolute bg-red-500 shadow-xl left-[0px] top-[82%] p-2 flex flex-col space-y-2 items-center rounded-md text-black text-sm'
                                    ref={modalRef}
                                    >
                                    <div className='flex justify-between items-center gap-4'>
                                        <Image
                                            priority
                                            src='/images/inventory/edit_icon.svg'
                                            alt='edit icon'
                                            width='20'
                                            height='20' />
                                        <button
                                            onClick={() => setEditInventory(true)}>
                                            Edit details</button>
                                    </div>

                                    <div className='flex justify-between items-center gap-2'>
                                        <Image
                                            priority
                                            src='/images/inventory/delete.svg'
                                            alt='delete icon'
                                            width='18'
                                            height='18' />
                                        <button className='justify-end' onClick={()=> handleDelete(ind)}>
                                            Delete</button>
                                    </div>

                                </div>
                            )}
                        </td>
                        </tr>
                       ))}
                    </tbody>
                </table>
            </div>
        </>
    )
                            }

export default InvoiceTableModal