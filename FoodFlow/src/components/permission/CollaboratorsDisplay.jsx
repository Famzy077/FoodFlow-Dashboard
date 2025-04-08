'use client'
import { BsQuestionCircle } from "react-icons/bs"
import TableContent1 from "./TableContent1"
import Rounded2xlBtn from "../button/Rounded2xlBtn"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import CircularDisplay from "../shapeDisplays/CircularDisplay"
import { useState } from "react"

export default function CollaboratorsDisplay() {
    const [pagination, setPagination] = useState(0)

  const handleNext = ()=>{
    const x = Array(
      user.length% 10 > 0 ? Math.floor(user.length/10) + 1 : user.length/10
    ).fill(1)
    if(pagination === x.length - 1 ) return
    setPagination(prev=>prev + 1)
  }
  const handlePrevious = ()=>{
    const x = Array(
      user.length% 10 > 0 ? Math.floor(user.length/10) + 1 : user.length/10
    ).fill(1)
    if(pagination === 0 ) return
    setPagination(prev=>prev - 1)
  }
  const user = [
    {name:'Joseph Emmanuel', role:'Admin', address:'oliva@unitritule.com'},
    {name:'Joseph Emmanuel', role:'Sales', address:'janes@unitritule.com'},
    {name:'Godwin Apkabio', role:'Admin', address:'oliva@gmail.com'},
    {name:'Godwin Apkabio', role:'Sales', address:'jones@gmail.com'},
    {name:'Joseph Emmanuel', role:'Admin', address:'oliva@gmail.com'},
    {name:'Joseph Emmanuel', role:'Admin', address:'oliva@gmail.com'},
    {name:'Omorin Sunday', role:'Supply Chain', address:'oliva@gmail.com'},
    {name:'Ololade Asake', role:'Admin', address:'oliva@gmail.com'},
    {name:'Ololade Asake', role:'Supply Chain', address:'oliva@gmail.com'},
    {name:'Omorin Sunday', role:'Admin', address:'oliva@gmail.com'},
    {name:'Omorin Sunday', role:'Sales', address:'oliva@gmail.com'},
    {name:'Toni Montana', role:'Admin', address:'oliva@gmail.com'},
    {name:'Omorin Sunday', role:'Supply Chain', address:'oliva@gmail.com'},
    {name:'Omorin Sunday', role:'Admin', address:'oliva@gmail.com'},
    {name:'Omorin Sunday', role:'Admin', address:'oliva@gmail.com'},
    {name:'Lius Sunday', role:'Sales', address:'oliva@gmail.com'},
    {name:'Lius Sunday', role:'Supply Chain', address:'oliva@gmail.com'},
    {name:'Omorin Sunday', role:'Supply Chain', address:'oliva@gmail.com'},
    {name:'Omorin Sunday', role:'Supply Chain', address:'oliva@gmail.com'},
    {name:'Omorin Sunday', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Sales', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Sales', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'oliva@gmail.com'},
    {name:'Charles Barbie', role:'Admin', address:'oliva@gmail.com'},
    {name:'Charles Barbie', role:'Admin', address:'oliva@gmail.com'},
    {name:'Charles Barbie', role:'Admin', address:'oliva@gmail.com'},
    {name:'Charles Barbie', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'joshua@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'femi@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'festus@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'monday@gmail.com'},
    {name:'Lious Douglas', role:'Admin', address:'aremu@gmail.com'},
    {name:'Lious Douglas', role:'Admin', address:'yunus@gmail.com'},
    {name:'Lious Douglas', role:'Admin', address:'kenny@gmail.com'},
    {name:'Lious Douglas', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'oliva@gmail.com'},
    {name:'Deji Adeyanju', role:'Admin', address:'oliva@gmail.com'},
   
  ]
  return (
    <div className="w-full h-[62vh] flex flex-col overflow-scroll scrollbar-hide border rounded-md relative">
    <div className="flex items-center gap-5 bg-primary text-white pl-[5%] py-2">
      <div className="w-[30%] truncate">Name</div>
      <div className="w-[20%] truncate flex items-center gap-1">Role <BsQuestionCircle size={20}/></div>
      <div className="w-[30%] truncate">Address</div>
    </div>

    {
      user.slice(10*pagination, 10*(pagination + 1))?.map((user,i)=>{
        return(
          <TableContent1 key={i} name={user.name} role={user.role} address={user.address}/>
        )
      })
    }

     <div className="flex items-center justify-between gap-5 bg-primary text-white px-[5%] py-2 mt-auto w-full">
      <Rounded2xlBtn
      onclick={handlePrevious}
       content={<div className="flex justify-center items-center gap-2"><BiLeftArrowAlt size={28}/>Previous</div>}
        bg="white"
         color="black"
          width={32}/>

          <div className="flex items-center gap-3">
            {Array(
              user.length% 10 > 0 ? Math.floor(user.length/10) + 1 : user.length/10
            ).fill(1).map((_,i)=>{
              return(
                <div
                onClick={()=>setPagination(i)}
                className="cursor-pointer text-secondary"
                key={i}> {pagination == i ? <CircularDisplay color="bg-white text-primary" content={i + 1}/>: i + 1}</div>
              )
            })}
          </div>

      <Rounded2xlBtn
        onclick={handleNext}
       content={<div className="flex justify-center items-center gap-2">Next <BiRightArrowAlt size={28}/></div>}
        bg="white"
         color="black"
          width={32}/>
    </div>
    </div>
  )
}
