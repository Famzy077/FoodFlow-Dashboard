import React from 'react'

const ClientDetails = () => {
 
  return (
    <section>
        <div className='text-center space-y-3 text-zinc-500'>
        <p className='font-bold text-2xl'>Client name</p>
        <p className='text-2xl'>#3874</p>
        <p className='text-xs'>jemmastone2@gmail.com</p>
        <p className='text-base'>No 4 ike road Amaku</p>
        <div className='flex justify-center gap-10'>
          <p className='font-bold'>Last Activity </p>  
          <p>DD/MM/YY</p>
          </div>
      </div>
    </section>
  )
}

export default ClientDetails