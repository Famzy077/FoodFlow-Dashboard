"use client"
import React, { useEffect, useContext, useState} from 'react';
import StepIndicator from '../../../../../components/payments/StepIndicator';
import InvoiceForm from '../../../../../components/payments/InvoiceForm';
import Form from '@/components/order_page/payments/Form';
import PayCart from '@/components/payments/PayCart';
import { DataProvider } from '@/context/StepContex';
import PayCheckout from '@/components/payments/PayCheckout';


const InvoicePage = () => {
    const step = ["Item Details", "Checkout", "Confirm"];
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(true)
    const [complete, setComplete] = useState(false)

    const pageDisplay = () => {

        if (page == 1) {
            return <InvoiceForm />
        } else if (page == 2) {
            return (
                <div className='flex justify-between mt-8'>
                    <Form />
                    <PayCart
                        title='Item details'
                        path=""
                        onClick={() => setPage((prevState) => prevState + 1)} />
                </div>
            )
        } else {
            return (
                <div className='flex justify-between mt-8'>
                    <Form />
                    <PayCheckout
                        path="/kitchen/payments/InvoiceSuccess" />
                </div>
            )
        }
    }

    useEffect(() => {
        if (page == 2 || page == 3) {
            setVisible(false)
        }
    }, [page])

    return (
        <DataProvider>
            <h1 className=" font-bold text-3xl absolute top-[-2.9rem]">Payment
                <span className="text-green-600 space-x-2 font-light ml-2">₦</span>
            </h1>
        {/* // ============Main border==================== */}
        <div className=' relative z-50 flex flex-col justify-evenly border border-zinc-400 rounded-lg m-5 h-[87vh]'>

            {/* ====================Stage Indicator============== */}
            <div>
                <StepIndicator step={step} page={page} complete={complete} />
            </div>
            {/* =================Display body================= */}
            <section className='mt-3 overflow-auto'>
                {pageDisplay()}
            </section>

            {/* ==============page controller================== */}
            {visible && (
                <div className='flex items-end justify-end mr-[10rem] mb-5'>
                    <button className=' text-white font-medium bg-black border border-black rounded-md px-8 py-1'
                        onClick={() => {
                            page == step.length ? setComplete(true) :
                                setPage((prevState) => prevState + 1)
                        }}>
                        Continue
                    </button>
                </div>
            )}
        </div>
        </DataProvider>
    )
}

export default InvoicePage