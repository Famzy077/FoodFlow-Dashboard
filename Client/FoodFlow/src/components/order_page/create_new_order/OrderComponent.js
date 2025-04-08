import React from "react";
import FoodContainer from "./FoodContainer";
import CartContainer from "./CartContainer";

export default function OrderComponent() {
  return (
    <div className="flex absolute left-4 w-[99%] p-5 gap-8 h-[fit-content]">
      <FoodContainer />
      <CartContainer title="My orders" path="/order/payments" />
    </div>
  );
}
