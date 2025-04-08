import React from 'react'
import Image from 'next/image';

function DataCard({head, number, desc, statColor}) {
  return (
    <>
    
    <div className='flex flex-col space-y-2 border bg-white border-zinc-400 w-1/3 rounded-lg p-3
    hover:text-white hover:bg-primary'>
    <div className='flex items-end justify-end text-red-400'>
    <Image
    priority
    src='/images/inventory/inventory_tabicon.svg'
    alt='card icon'
    width='18'
    height='18'/>
    </div>
   <p className='text-md pt-3 font-normal pb-4'>{head}</p>
   <p  className='text-3xl font-bold'>{number}</p>
   <p className='text-[12px] hover:text-white' style={{color:statColor}}>{desc}</p>
   </div>
  

   </>
  )
}

export default DataCard