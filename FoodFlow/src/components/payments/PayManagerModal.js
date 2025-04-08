import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const PayManagerModal = () => {

const [openInvoice, setOpenInvoice] = useState(false);

  return (
    <div className='border bg-white border-zinc-400 text-black p-2 px-1 w-[100%] flex 
    flex-col text-sm space-y-2 items-center rounded-md'>
    
    <div className='flex items-center gap-1 p-1 rounded-xl w-[100%] text-[1.1em] hover:text-white hover:bg-primary'>
    {/*------------icon for creating new inventory----------*/}
    <Image
     priority
     src='/images/payments/paymenteye.svg'
     alt='create icon'
     width='24'
     height='24'
     className=''/>
     <Link href='../kitchen/payments/Invoice'>
     <button>
     Create Invoice
     </button>
     </Link>
    </div>

    <div className='flex items-center gap-1 p-1 rounded-xl w-[100%] text-[1.1em] hover:text-white hover:bg-primary'>
    {/*----------- icon for viewing inventory-----------*/}
    <Image
     priority
     src='/images/payments/paymenteye.svg'
     alt='view icon'
     width='24'
     height='24'
     className=''/>
    <Link href='../kitchen/payments/Saleschannel'>
    <div className=''>By Sales Channel</div>
    </Link>
    </div>

    <div className='flex items-center gap-1 p-1 rounded-xl w-[100%] text-[1.1em] hover:text-white hover:bg-primary'>
    {/*----------- icon for viewing inventory-----------*/}
    <Image
     priority
     src='/images/payments/paymenteye.svg'
     alt='view icon'
     width='24'
     height='24'
     className=''/>
    <Link href='../kitchen/payments/Table'>
    <div className=''>By Payment Method</div>
    </Link>
    </div>
    </div>
  )
}

export default PayManagerModal