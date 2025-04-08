import React from 'react'

const ItemDetails = () => {
  return (
    <section className='flex flex-col mt-10 gap-7 overflow-auto w-[80%] ml-10'>
     {/* card ui, that can be display by mapping through data generated */}

    <article className='flex items-center border border-zinc-500 rounded-lg py-3'>
      <div>
      <img src="/images/client/pepsi.svg" alt='pepsi picture' />
      </div>

      <div className='flex flex-col justify-between gap-3'>
        <p className='text-zinc-400'>Lyndaeats restaurant</p>
        <h1 className='text-2xl font-semibold'> Pepsi 60 cl</h1>
        <h6 className='text-zinc-400'>60cl X 12bottles</h6>
        <p className='text-primary text-xl'>View inventory details</p>
      </div>
    </article>

    <article className='flex items-center border border-zinc-500 rounded-lg py-3'>
      <div>
      <img src="/images/client/cocacola.svg" alt='pepsi picture'/>
      </div>

      <div className='flex flex-col justify-between gap-3'>
        <p className='text-zinc-400'>Lyndaeats restaurant</p>
        <h1 className='text-2xl font-semibold'> Pepsi 60 cl</h1>
        <h6 className='text-zinc-400'>60cl X 12bottles</h6>
        <p className='text-primary text-xl'>View inventory details</p>
      </div>
    </article>

    <article className='flex items-center border border-zinc-500 rounded-lg py-3'>
      <div>
      <img src="/images/client/pepsi.svg" alt='pepsi picture'/>
      </div>

      <div className='flex flex-col justify-between gap-3'>
        <p className='text-zinc-400'>Lyndaeats restaurant</p>
        <h1 className='text-2xl font-semibold'> Pepsi 60 cl</h1>
        <h6 className='text-zinc-400'>60cl X 12bottles</h6>
        <p className='text-primary text-xl'>View inventory details</p>
      </div>
    </article>

    </section>
  )
}

export default ItemDetails