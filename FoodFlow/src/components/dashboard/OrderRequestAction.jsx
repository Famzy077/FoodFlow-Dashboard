'use client'
import useElVisibility from "@/lib/UseElementVisibility";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { TfiInfoAlt } from "react-icons/tfi";

export default function OrderRequestAction() {
    const actionStyle = "flex items-center gap-2 cursor-pointer hover:bg-zinc-300 px-2"
    const { reference, isOpen, setIsOpen} = useElVisibility()

  return (
    <div
    ref={reference}
     className="relative">
        <BsThreeDotsVertical
        onClick={()=>setIsOpen(true)}
         className="cursor-pointer" size={20}/>
        {isOpen && 
        <div className="absolute top-0 right-0 w-max py-2 shadow-md flex flex-col gap-1 text-xs z-[999] bg-white rounded-md">
            <div className={actionStyle}><IoMdCheckmarkCircleOutline color="green"/> Accept Order</div>
            <div className={actionStyle}><MdOutlineCancel color="red"/> Reject Order</div>
            <div className={actionStyle}><TfiInfoAlt className="text-[#4F4F4F]"/> View Order</div>
        </div>}
    </div>
  )
}
