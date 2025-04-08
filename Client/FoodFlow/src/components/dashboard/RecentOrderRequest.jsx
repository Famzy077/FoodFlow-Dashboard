import { BsThreeDotsVertical } from "react-icons/bs"
import Rounded2xlBtn from "../button/Rounded2xlBtn"
import MapPin from "../shapeDisplays/MapPin"
import SquareDisplay from "../shapeDisplays/SquareDisplay"
import { MdKeyboardArrowDown } from "react-icons/md"
import OrderRequestAction from "./OrderRequestAction"

export default function RecentOrderRequest() {
  return (
          <div className="w-[66%] border rounded-md h-full border-zinc-300 p-3 overflow-y-scroll scrollbar-hide">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-4">
              <MapPin/>
              <h2>Recent order request</h2>
              </div>
                <Rounded2xlBtn
                border="border"
                borderColor="zinc-300"
                color="[#4F4F4F]"
                bg=""
                width="w-32"
                hieght="h-10"
                 content={
                 <div className="flex gap-2">
                    <span>Newest</span>
                    <MdKeyboardArrowDown size={24}/>
                 </div>}
                 />
            </div>

          <div className="mt-4 flex flex-col gap-1 ">
            {Array(2).fill(1).map((x,i)=>{
              return(
                <div
                 key={i}
                  className="w-full border border-zinc-300 h-14 rounded-md flex items-center justify-between px-4 py-1 text-xs">
                    <div className="flex items-center gap-4 w-1/2">
                      {/* for image */}
                      <div className=" w-[40px] h-[40px] rounded-full border"></div>
                      <div className="flex flex-col ">
                        <span>Akwu Stew and Chicken</span>
                        <span className="text-secondary text-[0.6rem]">Friday march 15</span>
                        <span className="text-primary text-[0.6rem]">#6462762832</span>
                      </div>
                    </div>

                    <div className="w-1/2 flex justify-between items-center">
                      <div className="flex flex-col ">
                        <span>Tayo peters</span>
                        <span className="text-[0.6rem] text-wrap text-[#4F4F4F]">no 14, akpu street, enugu</span>
                      </div>

                      <div className="flex gap-4 items-center">
                          <div>#2200</div>
                          <div>x3</div>
                          <SquareDisplay
                          color="text-primary"
                          border="border border-primary"
                          bg="bg-[#FFA9024F]"
                          size="w-[100px] h-[30px]"
                          content={<span>Pending</span>}
                          />
                          <OrderRequestAction/>
                      </div>
                    </div>
            </div>
              )
            })}
            <div className="flex items-center gap-1 text-primary mx-auto text-sm"><span className="underline">view more</span> <MdKeyboardArrowDown className="mt-1" size={20}/></div>
          </div>

          </div>
  )
}
