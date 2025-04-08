'use client'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function RectangularToggle({text1, text2, content=''}) {
    const [openContent, setOpenContent] = useState(false)
    const handleContent = ()=>{
        setOpenContent(!openContent)
    }
  return (
    <div className='flex flex-col gap-1 w-full max-w-[720px]'>
    <div
    onClick={handleContent}
     className="flex items-center justify-between border w-full  border-zinc-300 p-3 text-sm cursor-pointer">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">{text1}</h3>
          <span>{text2}</span>
        </div>
        <IoIosArrowDown className={`font-bold text-lg text-black ${openContent && 'rotate-180 origin-center transition-all duration-200'}`}/>
      </div>
      {
        openContent &&
        <>
           {content} 
        </> 
      }
    </div>
  )
}
