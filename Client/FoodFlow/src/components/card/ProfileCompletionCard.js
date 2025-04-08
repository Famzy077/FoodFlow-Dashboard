'use client'
import { useState } from "react"

export default function ProfileCompletionCard() {
    const [offset, setoffset] = useState(75)
  return (
    <div className="w-[320px] h-[200px] bg-primary rounded-md p-4 mr-6 flex items-center flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className={`w-[210px] h-[120px] relative rounded-full flex items-center justify-center`}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full text-white font-bold text-3xl flex items-center justify-center">
                            <span>{offset}%</span>
                        </div>
                        <svg
                        style={{
                            strokeDasharray: 1000,
                            // tocalculateoffset offset = max(690 - 1000)min * (%) + min (1000)
                            strokeDashoffset: (690-1000)*(offset/100) + 1000,
                            transformBox: "fill-box",
                            transformOrigin: "20% 45%",
                        }}
                         className="absolute top-0 left-0 fill-none stroke-[6px] stroke-white rotate-[270deg] -translate-x-1">
                            <circle cx='65' cy='65' r='48'/>
                        </svg>
                    </div>

                    <span className="text-white text-sm">Complete your profile information to unlock all features.</span>
                </div>
                <button className="w-full h-10 bg-white text-primary rounded-3xl ">Complete my profile</button>
            </div>
  )
}
