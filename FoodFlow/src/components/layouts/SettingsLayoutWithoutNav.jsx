'use client'
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";
import BusinessCard from "../card/BusinessCard";

export default function SettingsLayoutWithoutNav() {
  const router = useRouter()
  const handleRoute =()=>{
    router.back()
  }
  return (
    <div className="w-[400px] h-full border-r border-zinc-300 pt-8 pb-2 pl-5 flex flex-col ">
        <div
        onClick={handleRoute}
         className="flex items-center gap-3 font-bold text-black cursor-pointer mb-10">
          <MdArrowBackIosNew size={24}/>
          Back to Previous
        </div>
        <BusinessCard/>
    </div>
  )
}
