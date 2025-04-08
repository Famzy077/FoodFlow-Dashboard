'use client'; 
import React from 'react';
import { useState, useEffect } from 'react';
import DataCard from '@/components/card/DataCard';
import PaymentsTable from '@/components/inventory/PaymentsHistory';
import PayManagerModal from '@/components/payments/PayManagerModal';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [createInventory, setCreateInventory] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [createInventory]);

  return (
    <>
      <section className="p-4 m-2">
        <div className="flex flex-col justify-between">
          <div className="flex justify-end ">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 mb-3 text-center place-items-end bg-primary text-white font-semibold rounded-md w-[27%]"
            >
              Payments Manager
            </button>


{/*-------------- modal starts here--------------*/}
<div className='z-50  text-start absolute -top-3 right-12 w-[190px]'>
  {
    isOpen ? (<PayManagerModal/> ): null
  }
</div>
 </div>
{/*-------------- Data Cards--------------*/}
 <div className='flex space-x-2 justify-between items-center mb-3 -z-10'>
<DataCard
bgColor={'#FFFFFF'}
statColor={'#049561'}
head='Total inventory'
number='20'
desc='+ increased by 20% since Dec 2022'/>

            <DataCard
              bgColor={"#FFFFFF"}
              statColor={"#049561"}
              head="Total payments"
              number="20"
              desc="+ increased by 20% since Dec 2022"
            />

            <DataCard
              bgColor={"#FFFFFF"}
              statColor={"#AF290B"}
              head="Unreconciliated"
              number="10"
              desc="- decreased by 20% since Dec 2022"
            />
          </div>

          {/*-------------- Custom report Button--------------*/}
          <div className="flex mb-10 justify-end">
            <div className="border p-2 w-[27%] text-center  border-primary rounded-lg">
              <p>View Custom report</p>
            </div>
          </div>

          {/*--------------Inventory History Table--------------*/}
          <PaymentsTable />
        </div>
      </section>
    </>
  );
}
