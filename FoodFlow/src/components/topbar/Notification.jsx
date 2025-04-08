'use client'
import Image from "next/image";
import bell from "/public/images/icons/bell.svg";
import { useState } from "react";
import { RiArrowDownSLine, RiErrorWarningFill } from "react-icons/ri";
import CountDisplay from "@/components/market-place/CountDisplay";

export default function Notification() {
    const [openNotification, setOpenNotification] = useState(false)
  return (
    <div className="relative w-max shadow-lg">
        <Image
            src={bell}
            alt="notiification"
            style={{ objectFit: "cover", cursor: "pointer" }}
            // placeholder="blur"
            width={25}
            height={25}
            onClick={()=>setOpenNotification(!openNotification)}
            />
       {
       openNotification &&
        <div className="absolute w-[500px] h-[350px] z-[9999] bg-white shadow-lg top-8 right-5 px-1 overflow-y-scroll">
                <div className=" px-6 flex items-center justify-between relative">
                    <div className="text-zinc-400 py-4 flex items-center gap-3">
                        <RiErrorWarningFill size={20}/>
                        <span>Required Actions</span>
                    </div>
                    <div className="border-b-2 border-primary py-4 flex items-center gap-2 absolute -bottom-[0.10rem] right-6">
                        <CountDisplay count={2}/>
                        <span className="font-bold">Notifications</span>
                    </div>
                </div>

            <div className="border-t-2 border-zinc-300 flex items-center justify-between py-3 px-5">
                <div className="flex items-center gap-2">
                    <CountDisplay count={2}/>
                    <span>Orders</span>
                </div>
                <RiArrowDownSLine size={24}/>
            </div>

            <div className="border-t border-zinc-300 flex items-center justify-between py-3 px-5">
                <div className="flex items-center gap-2">
                    <CountDisplay count={2}/>
                    <span>Orders</span>
                </div>
                <RiArrowDownSLine size={24}/>
            </div>

            <div className="border-t border-zinc-300 flex items-center justify-between py-3 px-5">
                <div className="flex items-center gap-2">
                    <CountDisplay count={2}/>
                    <span>Orders</span>
                </div>
                <RiArrowDownSLine size={24}/>
            </div>
            
        </div>}
    </div>
  )
}
