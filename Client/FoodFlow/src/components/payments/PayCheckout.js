"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormatter from "../../utils/formatCurrency";
import Image from "next/image";
// import {
//   initializeCartFromCookies,
//   deleteItem,
// } from "@/redux/features/cart/cartSlice";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { useData } from "@/context/StepContex";

export default function PayCheckout({title, path}) {
    const {formData, setFormData} = useData();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(initializeCartFromCookies()); // Dispatch the action when component mounts
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    // loading state
    return <p>Loading...</p>;
  }

  const handleRemoveFromCart = (id) => {
     const newList = formData.filter((_, index) => index !== id)
     setFormData(newList)
  };

  //calculate the subtotal
  const subtotal = formData.reduce(
    (acc, item) => acc + item.amount * item.quantity,
    0
  );
  //discount value
  const discount = 1000;
  //calculating total amount
  const total = subtotal - discount;

  return (
    <div className="w-[30%] border border-primary rounded-lg h-[92vh] p-5 overflow-y-auto flex flex-col">
      <h1 className="text-[1.3rem] font-bold py-2">{title}</h1>
      <div>
        <ul className="flex items-center justify-between space-x-4 bg-gray-200">
          <li className="w-2/5">Items</li>
          <li className="w-1/5 items-center">Qty</li>
          <li className="w-2/5">Amount</li>
        </ul>
        <hr className="border-silver mt-3" />
      </div>

      {formData ? (
        formData.map((item, ind) => (
          <div
            key={ind}
            className="flex items-center justify-between space-x-4 mb-2"
          >
            <div className="w-2/5">
              <div className="relative w-[100px] h-[70px] mt-2">
                <Image
                  src='/images/cartTestItems/jollof.png'
                  fill
                  style={{ objectFit: "contain" }}
                  alt={item.name}
                  className="rounded-lg"
                  sizes="(max-width: 100px) 100vw"
                  priority
                />
              </div>
              <p>{item.name}</p>
            </div>
            <div className="w-1/5">
              <div className="flex items-center">
                <p className="p-1">{item.quantity}</p>
              </div>
            </div>
            <div className="w-1/5">
              <p>
                <CurrencyFormatter value={item.amount} />
              </p>
            </div>
            <div className="w-1/5">
              <button 
              onClick={() => handleRemoveFromCart(ind)}
            >
                <MdDelete size={25} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>cart items loading...</p>
      )}
      
      <div className="p-5">
        <hr className="border-[#ccc] mt-5" />
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
      <div className="flex justify-center">
        <Link href={path}>
          <button 
          className="bg-primary p-5 w-[311px] rounded-lg">
            Print Invoice
          </button>
        </Link>
      </div>
    </div>
  );
}
