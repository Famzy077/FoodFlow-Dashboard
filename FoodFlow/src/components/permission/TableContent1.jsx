'use client'
import DeleteEditCustom from './DeleteEditCustom'
import { BsThreeDotsVertical } from 'react-icons/bs'
import CircularDisplay from '../shapeDisplays/CircularDisplay'
import Rounded2xlBtn from '../button/Rounded2xlBtn'
import { IoMdCheckmark } from 'react-icons/io'
import useElVisibility from '@/lib/UseElementVisibility'
import InitialsFormatter from '@/lib/InitialsFormatter'

export default function TableContent1({name, role, address}) {
    const { reference, isOpen, setIsOpen} = useElVisibility()

  return (
    <div ref={reference} className='flex flex-col gap-2'>
    <div className="flex gap-5 items-center pl-[5%] py-2 relative border-t-2 border-secondary">
           <input type="checkbox" name="check" id="check" className="absolute top-5 left-3"/>
            <div className="w-[30%] truncate flex gap-3 items-center">
              <CircularDisplay bg='bg-zinc-100' content={<InitialsFormatter name={name}/>}/>
              <span>{name}</span>
              </div>
            <div className="w-[20%] truncate">{role}</div>
            <div className="w-[30%] truncate">{address}</div>
            <span>
              <BsThreeDotsVertical
              onClick={()=>setIsOpen(true)}
              className="absolute top-5 right-[5%] cursor-pointer"/>
            {isOpen && <DeleteEditCustom className='absolute right-0 top-0 '/>}
            </span>
         </div >
            {isOpen &&
             <div className='pl-[12%] py-2 flex flex-col gap-2'>
              <div className='flex gap-8 items-center'>
                <span className='w-[48%]'>Order</span>
                <Rounded2xlBtn content={<div className='flex gap-3 items-center'><IoMdCheckmark/> <span className='text-zinc-200'>Access granted</span></div>} width='w-40 cursor-pointer'/>
              </div>

              <div className='flex gap-8 items-center'>
                <span className='w-[48%]'>Product center</span>
                <Rounded2xlBtn content={'Allow access'} border='border' borderColor='black' bg='' color='black' width='w-28 cursor-pointer'/>
              </div>
              <div className='flex gap-8 items-center'>
                <span className='w-[48%]'>Backoffice</span>
                <Rounded2xlBtn content={'Allow access'} border='border' borderColor='black' bg='' color='black' width='w-28 cursor-pointer'/>
              </div>
              <div className='flex gap-8 items-center'>
                <span className='w-[48%]'>Settings</span>
                <Rounded2xlBtn content={'Allow access'} border='border' borderColor='black' bg='' color='black' width='w-28 cursor-pointer'/>
              </div>
              <div className='flex gap-8 items-center'>
                <span className='w-[48%]'>Helpdesk</span>
                <Rounded2xlBtn content={'Allow access'} border='border' borderColor='black' bg='' color='black' width='w-28 cursor-pointer'/>
              </div>
              <div className='flex gap-8 items-center'>
                <span className='w-[48%]'>Communications</span>
                <Rounded2xlBtn content={'Allow access'} border='border' borderColor='black' bg='' color='black' width='w-28 cursor-pointer'/>
              </div>
              
            </div>}
    </div>
  )
}
