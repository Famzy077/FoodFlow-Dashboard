import React from 'react'
import Rounded2xlBtn from '../button/Rounded2xlBtn'
import { CiCalendar } from 'react-icons/ci'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Calendar() {
  return (
    <Rounded2xlBtn
         bg=""
          width="w-40"
          border="border"
          borderColor="zinc-300"
          size='xs'
          hieght="h-12"
           content={
          <div className="flex items-center gap-4 text-primary p-2 ">
            <div className="flex items-center gap-2 text-black">
              <span className='text-primary'><CiCalendar size={20}/></span>
              <div className="flex flex-col items-start gap text-[0.6rem]">
                <span className="font-bold text-xs">Today</span>
                <span>14 Apr, 2024</span>
              </div>
            </div>
              <MdKeyboardArrowDown size={20}/>
          </div>
        } />
  )
}
