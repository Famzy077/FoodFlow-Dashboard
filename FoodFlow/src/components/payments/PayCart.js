"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormatter from "../../utils/formatCurrency";
import Image from "next/image";
// import shoppingCart from '../../../../public/images/shoppingCart.png'
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { useData } from "@/context/StepContex";

export default function PayCart({ title, path, onClick }) {
  const { formData, setFormData } = useData();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(initializeCartFromCookies());
    setLoading(false); // Set loading to false immediately after dispatching
  }, [dispatch]);

  if (loading) {
    // loading state
    return <p>Loading...</p>;
  }
  const totalAmount = formData.reduce(
    (acc, item) => acc + item.amount * item.quantity,
    0
  );
  const handleRemoveFromCart = (id) => {
    const newList = formData.filter((_, index) => index !== id);
    setFormData(newList);
  };

  return (
    <div className='w-[500px] border border-primary rounded-lg h-[829px] p-5 overflow-y-auto flex flex-col'>
      <h1 className='text-[1.3rem] font-bold py-2'>{title}</h1>
      <div>
        <ul className='flex items-center justify-between space-x-4 bg-gray-200'>
          <li className='w-2/5'>Items</li>
          <li className='w-1/5 items-center'>Qty</li>
          <li className='w-2/5'>Amount</li>
        </ul>
        <hr className='border-silver mt-3' />
      </div>
      {formData.length === 0 ? (
        <div className='h-full flex flex-col items-center justify-center'>
          <div className='relative h-[54px]'>
            {/* <Image
              src={shoppingCart}
              fill
              style={{ objectFit: "cover" }}
              alt="shopping-cart"
              sizes="(max-width: 74px) 100vw"
              placeholder="blur"
            /> */}
          </div>
          <p>You have not made any orders</p>
        </div>
      ) : (
        <>
          {formData.map((item, ind) => (
            <div
              key={ind}
              className='flex items-center justify-between space-x-4 mb-2'
            >
              {/* ======food image======= */}
              <div className='w-2/5'>
                <div className='relative w-[100px] h-[70px] mt-2'>
                  <Image
                    src='/images/cartTestItems/jollof.png'
                    fill
                    style={{ objectFit: "contain" }}
                    alt='foodname'
                    className='rounded-lg'
                    sizes='(max-width: 100px) 100vw'
                    priority
                  />
                </div>
                <p>{item.name}</p>
              </div>

              {/* ===========Quantity=================== */}
              <div className='w-1/5'>
                <div className='flex items-center'>
                  <p className='p-1'>{item.quantity}</p>
                </div>
              </div>

              {/* ==========Amount=============== */}
              <div className='w-1/5'>
                <p>
                  <CurrencyFormatter value={item.amount} />
                </p>
              </div>

              {/* =====delete button================= */}
              <div className='w-1/5'>
                <button onClick={() => handleRemoveFromCart(ind)}>
                  <MdDelete size={25} />
                </button>
              </div>
            </div>
          ))}

          <div>
            <div className='p-5 bg-[#F3F3FE] rounded-lg flex flex-row mt-10 justify-between'>
              <p>Item total</p>
              <p>
                <CurrencyFormatter value={totalAmount} />
              </p>
            </div>
            <div className='p-5 flex flex-row mt-5 justify-between'>
              <Link href={path}>
                <button
                  onClick={onClick}
                  className='border border-green-700 text-green-700 hover:bg-green-700 hover:text-white p-5 w-[200px] rounded-lg'
                >
                  Confirm
                </button>
              </Link>

              <button
                className='border border-red-700 text-red-700 hover:bg-red-700 hover:text-white p-5 w-[200px] rounded-lg'
                // onClick={handleClearCart}
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
