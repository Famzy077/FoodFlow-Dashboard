import React from "react";
import Form from "./Form";
import Checkout from "./Checkout";

export default function IndexPayments() {
  return (
    <div className="flex items-center justify-between space-x-5 w-[97%]">
      <Form />
      <Checkout title="My Orders" path="/order/order_success" />
    </div>
  );
}
