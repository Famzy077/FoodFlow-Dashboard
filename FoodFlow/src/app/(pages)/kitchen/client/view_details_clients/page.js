import ClientBody from '@/components/client/ClientBody';
import ClientDetails from '@/components/client/ClientDetails';
import React from 'react'

const ViewDetails = () => {
  return (
    <section className='border z-0 border-zinc-400 rounded-md mb-3 mx-8 flex flex-col justify-around h-[fit-content] overflow-auto'>
    <div>
      <ClientDetails/>
    </div>
    
      <div>
      <ClientBody />
      </div>
    </section>
  )
}

export default ViewDetails