import { CiCircleRemove } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { TfiInfoAlt } from "react-icons/tfi";

export default function DeleteEditCustom({className}) {
    
  return (
    <div className={`flex flex-col justify-center z-[999] bg-white shadow-lg w-[150px] h-[60px] text-xs ${className}`}>
        <div className="flex items-center gap-2 px-4 cursor-pointer hover:bg-secondary">
            <CiCircleRemove color="red"/>
            Delete
        </div>
        <div className="flex items-center gap-2 px-4 cursor-pointer hover:bg-secondary">
            <MdOutlineEdit/>
            Edit
        </div>
        <div className="flex items-center gap-2 px-4 cursor-pointer hover:bg-secondary">
            <TfiInfoAlt/>
            Custom access
        </div>
    </div>
  )
}
