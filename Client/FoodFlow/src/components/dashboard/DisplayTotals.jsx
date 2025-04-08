import { BsBookFill, BsCup, BsPeople } from "react-icons/bs";
import CircularDisplay from "../shapeDisplays/CircularDisplay";
import Image from "next/image";
import lineChart from '/public/images/lineChart.png'
import { TbCurrencyNaira } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";

export default function DisplayTotals() {
    const totalDisplay = [
        {name: 'menus', count:54, signal: +4, icon: <BsCup size={22}/> },
        {name: 'Orders', count:120, signal: +2.5, icon: <LuClipboardList size={22}/>},
        {name: 'Customers', count:50, signal: +2.5, icon: <IoIosPeople size={20}/>},
        {name: 'Revenue', count:'200k', signal: -3, icon: <TbCurrencyNaira size={28}/>},
    ]
  return (
    < >
      {
        totalDisplay.map((total,i)=>{
          return(
            <div
              key={i}
              className="w-1/4 h-[100px] shadow-lg rounded-md p-2 flex gap-2"
              >
                <CircularDisplay
                border=""
                bg='bg-[#FFA90236]'
                content={total.icon}/>

                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">{total.count}</h2>
                    <span className="text-xs">Total {total.name}</span>
                    <div className="text-xs text-zinc-400 flex items-center gap-1">
                    <Image src={lineChart} alt="line-chart" width={12} height={12} quality={80}/>
                    <span className={`${total.signal > 0 ?'text-[#049561]':'text-[#AF290B]'}`}>{total.signal > 0 ? `+${total.signal}`:total.signal}%</span>
                        (30days)
                    </div>
                </div>
            </div>
            
          )
        })
      }
    </>

  )
}
