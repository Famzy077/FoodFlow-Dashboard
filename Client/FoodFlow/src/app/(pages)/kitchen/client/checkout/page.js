'use client'
import ItemAmount from '@/components/client/ItemAmount'
import ItemDetails from '@/components/client/ItemDetails'
import React, { useEffect, useState } from 'react'
import CurrencyFormatter from '../../../../../utils/formatCurrency';
import ClientForm from '@/components/client/ClientForm';


const page = () => {
  
  const formData = [
    { amount: 250, quantity: 1 },
    { amount: 250, quantity: 1 },
    { amount: 250, quantity: 1 },
  ]
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(true)
  const [invoice, setInvoice] = useState(false)

  // to change body display without moving pages
  const pageDisplay = () => {

    if (page == 1) {
      return (
        <div className='flex items-center justify-between gap-10'>
          <ItemDetails />
          <ItemAmount fakeData={formData} />
        </div>
      )
    }
    else {
      return (
        <div className='flex items-center justify-between gap-10'>
          <ItemAmount fakeData={formData} />
          <ClientForm />
        </div>
      )
    }
  }

  // to toggle button display
  useEffect(() => {
    if (page == 2) {
      setVisible(false)
      setInvoice(true)
    } else {
      setVisible(true)
      setInvoice(false)
    }
  }, [page])

  //calculate the subtotal of all items in the cart
  const subtotal = formData.reduce(
    (acc, item) => acc + item.amount * item.quantity,
    0
  );
  //discount value
  const discount = 10;
  //calculating total amount
  const total = subtotal - discount;

  // ====to show current date
  const calendar = () => {
    var d = new Date()
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    return (day + "-" + month + '-' + year )
  }

  return (
    <section className='border border-zinc-400 mx-8 rounded-lg h-[97%] overflow-auto'>

      <div className='flex items-center justify-between mx-10 mt-3'>
        <p>Order no: 1234-12323</p>
        <p>Date: {calendar()}</p>
      </div>

      <div className=''>
        {pageDisplay()}
      </div>

      {visible && (
        <div className='flex flex-col items-end gap-3 w-full'>

          <div className='bg-primary rounded-md flex justify-between p-3 w-[37%]'>
            <p>Item Total</p>
            <h1><CurrencyFormatter value={total}/></h1>
          </div>

            <button className='bg-primary p-3 text-center rounded-lg w-[37%]'
              onClick={() => setPage((prevState) => prevState + 1)}
            >Next Page</button>
        </div>
      )}

      {invoice && (
        <article className='w-[37%]'>
          <div className="">
            <hr className="border-[#ccc]" />
            <div className="flex justify-between mt-5">
              <p>subtotal: </p>
              <CurrencyFormatter value={subtotal} />
            </div>
            <div className="flex justify-between">
              <p>discount: </p>
              <CurrencyFormatter value={discount} />
            </div>
            <hr className="border-[#ccc] mt-5" />
            <div className="flex justify-between mt-5">
              <p>total: </p>
              <CurrencyFormatter value={total} />
            </div>
          </div>

          {/* <div> */}
            <button className='bg-primary p-3 text-center rounded-lg w-[100%] mt-3'
            onClick={() => setPage((prevState) => prevState - 1)}>
              Previous Page</button>
          {/* </div> */}
        </article>
      )}
    </section>
  )
}

export default page;