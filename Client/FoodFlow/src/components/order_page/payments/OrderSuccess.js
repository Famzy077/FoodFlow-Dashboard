"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import orderSuccess from "/public/images/Order-success.svg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/features/cart/cartSlice";

export default function OrderSuccess({title,path}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart()); // Clear the cart when component mounts
  }, [dispatch]);

  // const handleCartReset = () => {
  //   dispatch(clearCart());
  // };
  return (
    <div className="flex justify-center items-center">
      <div className="border border-[#B1B1B4] w-[1010px] h-[829px] rounded-lg mt-6 text-center ">
        <div className="absolute -top-14 text-start leading-none">
          <h1 className="text-3xl font-bold">Order Confirmed</h1>
          <Link href={'#/'}>Create new order</Link>
        </div>
        <div className="flex justify-center mt-10">
          <Image src={orderSuccess} alt="success" />
        </div>

        <h1 className="font-[400px] text-[36px] mt-4">Order Confirmed</h1>
        <p className="text-lg">your Payment ID: 1234</p>
        <div className="mt-6 flex justify-center">
          <Link href={path}>
            <button className="mt-10 bg-primary border border-[#4F4F4F] w-[311px] p-[15px] rounded-lg">
             {title}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
