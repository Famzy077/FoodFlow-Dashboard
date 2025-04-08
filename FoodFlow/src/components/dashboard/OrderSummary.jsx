import { MdKeyboardArrowRight } from "react-icons/md"
import CircularDisplay from "../shapeDisplays/CircularDisplay"
import MapPin from "../shapeDisplays/MapPin"
import SquareDisplay from "../shapeDisplays/SquareDisplay"
import DoughnutChart from "../charts/Doughnut"

export default function OrderSummary() {
  return (
    <div className="w-[40%] border rounded-md h-[300px] border-zinc-300 p-3">
              <div className="flex gap-4">
                <MapPin/>
                <h2>Orders Summary</h2>
            </div>
              <div className="w-full h-12 px-4 py-2 rounded-md bg-[#9FF1CA] text-[#049561] my-3 flex items-center justify-between text-sm">
                <div className="flex gap-3 items-center">
                  <SquareDisplay bg="bg-[#049561]" content={<span className="font-bold">15</span>}/>
                  <h2>New Orders</h2>
                  <CircularDisplay bg="bg-[#049561]" border="" size="w-2 h-2"/>
                </div>
                <div className="flex items-center gap-3">
                  Manage order
                  <MdKeyboardArrowRight/>
                </div>
              </div>

              <div className="flex gap-4 justify-between">
                {Array(3).fill('1').map((x,i)=>{
                  return(
                      <SquareDisplay
                       key={i}
                        size="w-[33%] h-[54px] p-2" justify='justify-start' color="text-zinc-300" bg="" border="border border-zinc-300"
                      content={<div className="flex flex-col ">
                        <span className="text-black text-base">25</span>
                        <span className="text-xs">Pending</span>
                      </div>}/>
                  )
                })}
              </div>
              
              <div className="flex items-center gap-4 my-5 ml-5">
                <DoughnutChart/>
                <div className="flex flex-col gap-2 text-sm w-full">

                  <div className="flex items-center justify-between gap-1 w-full">
                    <span className="text-secondary">Pending(25%)</span>
                    <div className="w-[70%] h-2 border rounded-3xl border-zinc-300">
                      <div className={`w-[25%] h-full bg-[#AF290B] rounded-3xl`}>&nbsp;</div>
                    </div>
                    <span>25</span>
                  </div>

                  <div className="flex items-center justify-between gap-1 w-full">
                    <span className="text-secondary">Delivered(70%)</span>
                    <div className="w-[70%] h-2 border rounded-3xl border-zinc-300">
                      <div className={`w-[70%] h-full bg-[#049561] rounded-3xl`}>&nbsp;</div>
                    </div>
                    <span>70</span>
                  </div>

                  <div className="flex items-center justify-between gap-1 w-full">
                    <span className="text-secondary">Cancelled(5%)</span>
                    <div className="w-[70%] h-2 border rounded-3xl border-zinc-300">
                      <div className={`w-[5%] h-full bg-[#9FF1CA] rounded-3xl`}>&nbsp;</div>
                    </div>
                    <span>5</span>
                  </div>
                  
                </div>
              </div>
          </div>
  )
}
