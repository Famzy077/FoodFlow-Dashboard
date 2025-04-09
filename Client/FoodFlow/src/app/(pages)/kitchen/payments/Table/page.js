'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { inventoryData } from '../../../../../utils/Inventorydata';
import ViewPayments from '@/components/inventory/ViewPaymentsTable';
import Filter from '@/components/inventory/Filter';
import { paymentData } from '../../../../../utils/Paymentdata';

export default function Page() {
  const [openFilter, setOpenFilter] = useState(false)
  const handleFilter = () => {
    setOpenFilter(!openFilter)
  }
  // const [records, setRecords] = useState(jsonData);
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const limitAlerts = inventoryData.filter(
    (row) => row.quantityalert === "alerted"
  );
  //console.log(pendingProcurements);


  return (
    <>
      <div className='px-8'>
          <div className="absolute top-[-2.9rem]">
            <h1 className=" font-bold text-3xl">Payment
                <span className="text-green-600 space-x-2 font-light ml-2">₦</span>
            </h1>
            <p className="text-xm text-zinc-400">By payment method</p>
          </div>
        <section className='border-2 w-[93%] mb-5 h-[fit-content] border-zinc-400 rounded-2xl mt-10 p-6'>
          <div className='flex items-center justify-between p-3'>
            <ul className='border bg-primary bg-opacity-30 text-white p-2 rounded-full'>
            
              <div className='flex justify-between space-x-2'>

              <button
                onClick={() => handleButtonClick("All")}
                className={`${ activeButton === "All" ? "bg-primary rounded-full px-10 py-3" : "px-10 py-3" }
                  transition-all duration-300 ease-linear`} >
                All
              </button>

              <button
              onClick={() => handleButtonClick("POS")}
              className={`${ activeButton === "POS" ? "bg-primary rounded-full px-10 py-3" : "px-10 py-3" }
                transition-all duration-300 ease-linear`} >
              POS
            </button>

            <button
            onClick={() => handleButtonClick("Cash")}
            className={`${ activeButton === "Cash" ? "bg-primary rounded-full px-10 py-3" : "px-10 py-3" }
              transition-all duration-300 ease-linear`} >
            Cash
          </button>

          <button
          onClick={() => handleButtonClick("Bank Transfer")}
          className={`${ activeButton === "Bank Transfer" ? "bg-primary rounded-full px-10 py-3" : "px-10 py-3" }
            transition-all duration-300 ease-linear`} >
          Bank Transfer
        </button>

        <button
        onClick={() => handleButtonClick("Online Transfer")}
        className={`${ activeButton === "Online Transfer" ? "bg-primary rounded-full px-10 py-3" : "px-10 py-3" }
          transition-all duration-300 ease-linear`} >
        Online Transfer
      </button>

              </div>
            </ul>

            <div className='flex justify-between align-center gap-5
        border border-primary rounded-full py-1 px-7 text-primary hover:bg-primary hover:text-white'>
              <Image
                priority
                src='/images/inventory/filter.svg'
                alt='filter icon'
                width='24'
                height='24' />
              <button onClick={handleFilter}>
                Filter
              </button>
            </div>
          </div>

          <Filter/>

          <div>
          {activeButton === "All" && (
            <div>
           <ViewPayments data={paymentData} />
            </div>
          )}
          {activeButton === "Cash" && (
            <div>
            <ViewPayments data={paymentData} />
            </div>
          )}
          </div>

        </section>
      </div>
    </>
  )

}
