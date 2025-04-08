'use client'
import React from 'react'
import ViewClient from '@/components/client/ViewClientTable'
import ClientDetails from '@/components/client/ClientDetails'
import { inventoryData } from '../../../../../utils/Inventorydata'

const Viewall = () => {
  return (
    <section className='border border-zinc-400 rounded-md mx-5 flex flex-col items-center justify-between space-y-5 h-[fit-content]'>
    <div> <ClientDetails/> </div>
    <div className=' m-6 overflow-auto rounded-md h-[70vh]'> 
     {/* you need a new table, this view details is already linked view_details_clients */}
      <ViewClient data={inventoryData}/> 
    </div>
    </section>
  )
}

export default Viewall