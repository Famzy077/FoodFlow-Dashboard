'use client'
import { useState } from "react"

export default function PeriodFilter() {
    const [currentPeriod, setCurrentPeriod] = useState('Monthly')
    const periods = ['Monthly', 'Weekly', 'Today']
  return (
    <div className="w-[250px] h-[35px] rounded-3xl border border-zinc-300 flex items-center justify-between">
                {periods.map((period, i)=>{
                  return(
                    <div
                    onClick={()=>setCurrentPeriod(period)}
                     key={i}
                      className={`text-black w-1/3 h-full flex justify-center items-center transition-all delay-75 cursor-pointer rounded-3xl border-zinc-300
                       ${period == currentPeriod? 'bg-black text-white border': null}`}>
                      <span>{period}</span>
                    </div>
                  )
                })}
    </div>
  )
}
