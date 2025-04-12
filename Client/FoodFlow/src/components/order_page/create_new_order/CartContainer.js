"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormatter from "../../../utils/formatCurrency";
import Image from "next/image";
import shoppingCart from "/public/images/shoppingCart.png";
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  initializeCartFromCookies,
} from "@/redux/features/cart/cartSlice";
import Link from "next/link";

export default function CartContainer({ title, path, onClick }) {
  const [loading, setLoading] = useState(true);
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const dispatch = useDispatch();
  let image = 'https://feelgoodfoodie.net/wp-content/uploads/2020/07/Jollof-Rice-4.jpg';

  useEffect(() => {
    dispatch(initializeCartFromCookies());
    setLoading(false); // Set loading to false after initializing the cart
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>; // Show a loading state
  }

  const handleRemoveFromCart = (item) => {
    dispatch(deleteItem({ id: item.id }));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity({ id: item.id }));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity({ id: item.id }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[22rem] border border-primary rounded-lg p-5 px-4 flex flex-col">
      <h1 className="text-[1.3rem] font-bold py-2">{title}</h1>
      <div className="w-[100%]">
        <ul className="flex justify-around w-[100%] bg-gray-200">
          <li className="w-[100%]">Items</li>
          <li className="w-[100%]">Qty</li>
          <li className="w-[100%] items-center">Amount</li>
        </ul>
        <hr className="border-silver mt-3" />
      </div>
      {cartItems.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center">
          <div className="relative h-[54px]">
            <Image
              src={shoppingCart}
              fill
              style={{ objectFit: "cover" }}
              alt="shopping-cart"
              sizes="(max-width: 74px) 100vw"
              placeholder="blur"
              className="border border-secondary"
            />
          </div>
          <p>You have not made any orders</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item, itemKey) => (
            <div
              key={item.id} // Use item.id as the unique key
              className="flex items-center justify-between space-x-2 mb-2 w-[100%]"
            >
              <div className="w-2/5">
                <div className="relative w-[100px] h-[70px] mt-2">
                  <Image
                    src={item.selectedPicture || image} // Fallback image
                    fill
                    style={{ objectFit: "cover" }}
                    alt={item.itemName}
                    className="rounded-lg"
                    sizes="(max-width: 100px) 100vw"
                    priority
                  />
                </div>
                <p>{item.itemName}</p>
              </div>
              <div className="w-1/5">
                <div className="flex items-center">
                  <button
                    className={`px-2 py-1 border ${
                      item.quantity === 1 ? "border-gray-300" : "border-red-700"
                    } rounded-md`}
                    onClick={() => handleDecreaseQuantity(item)}
                    disabled={item.quantity === 1} // Disable button when quantity is 1
                  >
                    -
                  </button>
                  <p className="p-1">{item.quantity}</p>
                  <button
                    className="px-2 py-1 border border-green-700 rounded-md"
                    onClick={() => handleIncreaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="pl-2">
                <p>
                  <CurrencyFormatter value={item.price * item.quantity} />
                </p>
              </div>
            </div>
          ))}
          <div>
            <div className="p-5 bg-[#F3F3FE] rounded-lg flex flex-row mt-10 justify-between">
              <p>Item total</p>
              <p>
                <CurrencyFormatter value={totalAmount} />
              </p>
            </div>
            <div className="p-5 flex flex-row mt-5 justify-between">
              <Link href={path}>
                <button
                  onClick={onClick}
                  className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white mr-2 p-5 w-[150px] rounded-lg"
                >
                  Confirm
                </button>
              </Link>
              <button
                className="border border-red-700 text-red-700 hover:bg-red-700 hover:text-white p-5 w-[200px] rounded-lg"
                onClick={handleClearCart}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
