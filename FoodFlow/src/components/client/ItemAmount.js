import React from 'react'
import CurrencyFormatter from '../../utils/formatCurrency'

const ItemAmount = ({fakeData}) => {
  return (
    <section className=' flex flex-col gap-3 w-[50%] overflow-auto'>

      {/*ADVICE: make use of map method to display items instead of repeating the same lines of code */}

{fakeData.map((items, ind) => (
     <article key={ind} className='flex justify-center mt-5 gap-5'>
      <div className='border border-zinc-500 rounded-xl w-[35%] overflow-hidden'>
        <div className='bg-zinc-100 px-4 py-6 text-zinc-400 text-base'>Quantity</div>
        <div className='px-4 py-5 text-center text-2xl text-zinc-400'>{items.quantity}</div>
      </div>
      <div className='border border-zinc-500 rounded-xl w-[35%] overflow-hidden'>
        <div className='px-4 py-6 bg-zinc-100 text-base text-zinc-400'>Total fee</div>
        <div className='text-left px-4 py-5 gap-3 text-zinc-400'>
          <p>Due Today</p>
          <h1 className='text-2xl'><CurrencyFormatter value={items.amount}/></h1>
        </div>
      </div>
     </article>
))}
    </section>
  )
}

export default ItemAmount