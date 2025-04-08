import { LuSend } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";

export default function BusinessCard() {
  return (
    <div className="w-[200px] h-[200px] rounded-md border border-zinc-300 p-2 flex flex-col justify-between text-xs">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-sm">Iya Olounje Treats</h3>
            <button className="w-28 h-6 border border-[#BA2D02] text-[#BA2D02] bg-[#BA2D024F] rounded-2xl">Restaurant</button>
            <span className="text-primary">View booking page</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <button className="w-16 h-6 border rounded-2xl border-[#D0D5DD] bg-[#E1E8EC] text-[#063150] flex justify-center items-center text-[0.5rem]"><MdContentCopy size={14}/> Copy link</button>
              <button><LuSend/></button>
            </div>
            <button className="w-16 h-6 border rounded-2xl border-[#D71400] bg-white text-[#D71400]">Turn on</button>
          </div>
        </div>
  )
}
