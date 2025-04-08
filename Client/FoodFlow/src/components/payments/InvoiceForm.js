import React from 'react'
import InvoiceTableModal from './InvoiceTableModal';
import { useState } from 'react';
import CurrencyFormatter from '../../utils/formatCurrency';
import { useData } from '@/context/StepContex';

const InvoiceForm = () => {

    // =========== state props=====================
    const [details, setDetails] = useState({
        name: '',
        quantity: 0,
        amount: 0
    });
    const [detailsArr, setDetailsArr] = useState([]);
    const { addFormData } = useData();

    // ============ handle onchange ============
    const handleChange = (e) => {
        const { name, value } = e.target
        setDetails((prev) => ({
            ...prev, [name]: value
        }))
    };

    // ============ handle submit =============
    let { name, quantity, amount } = details;
    const handleSubmit = () => {
        addFormData(details)
        setDetailsArr([...detailsArr, { name, quantity, amount }]);
        setDetails({ name: '', quantity: '', amount: '' })
    }

    // delete items from row modal
    // const handleDelete =(id) => {
    //     const newList = detailsArr.filter((_, index) => index !== id)
    //     setDetailsArr(newList)
    //      }

    // *==============calculate total amount ============
    const totalAmount = detailsArr.reduce(
        (acc, items) => acc + items.amount * items.quantity,
        0
    );

    const totalItems = detailsArr.length

    const formFilled = Object.values(details).every((items) => {
        if (typeof items === 'string') {
            return items.trim() !== '';
        }
        // If value is not a string, consider it as filled
        return true
    })

    return (
        <div className='relative py-5 my-10 space-y-4 border border-zinc-400 rounded-lg flex flex-col justify-center overflow-auto w-[70%] m-auto'>
            <div className='space-y-3 z-50'>
                <h1 className='font-bold text-lg ml-8'>Item details</h1>
                <hr className='text-zinc-400'/>
            </div>

            {/* ==========Form starts Here ============= */}

            <form className='mx-8 overflow-hidden z-20 mt-5 flex flex-col justify-between py-3 gap-3'>
                <div className='flex z-0 flex-col gap-4'>
                    <label htmlFor='name' className='font-bold text-base ml-4'>Item name</label>
                    <input type='text' name='name' value={details.name} placeholder='Enter first name' onChange={handleChange}
                        className='p-3 borde border-zinc-400 rounded-md' />
                </div>

                <div className='flex flex-col gap-4 -z-10'>
                    <label htmlFor='quantity' className='font-bold text-base ml-4 -z-10'>Quantity</label>
                    <input type='number' name='quantity' value={details.quantity}
                        placeholder='Enter quantity' onChange={handleChange}
                        className='p-3 z-0 border border-zinc-400 rounded-md' />
                </div>

                <div className='flex z-0 flex-col gap-4 -z-10'>
                    <label htmlFor='amount' className='font-bold text-base ml-4 -z-10'>Amount</label>
                    <input type='number' name='amount' value={details.amount} placeholder='Amount' onChange={handleChange}
                        className='p-3 border border-zinc-400 rounded-md' />
                </div>

            </form>

            <div className='mx-8 space-x-6'>
                <button className={`${formFilled > 0 ? 'text-primary font-medium bg-white border border-primary rounded-md px-8 py-1 w-[25%]' : 'text-zinc-500 font-medium bg-white border border-zinc-400 rounded-md px-8 py-1 w-[25%]'}`} onClick={() => handleDelete()}>
                    {/* ===== svg image here====== */}
                    Remove
                </button>
                <button onClick={handleSubmit}
                    className={`${formFilled > 0 ? 'bg-primary text-white font-medium border border-primary rounded-md px-8 py-1 w-[25%]' : 'bg-zinc-500  text-white font-medium border border-zinc-400 rounded-md px-8 py-1 w-[25%]'}`}>
                    Save item
                </button>
            </div>

            <div className='mb-[3rem]'>
                <div className='mx-8  flex justify-between items-center text-zinc-400'>
                    <div >{totalItems > 1 ? `${totalItems} items` : `${totalItems} item`}</div>
                    <div className={`${totalItems ? 'text-primary' : ''}`}>Amount: <CurrencyFormatter value={totalAmount} /> </div>
                </div>
            </div>

            <InvoiceTableModal info={detailsArr} setInfo={setDetailsArr} />

        </div>

    )
}

export default InvoiceForm