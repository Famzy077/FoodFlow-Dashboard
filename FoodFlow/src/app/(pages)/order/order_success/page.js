import OrderSuccess from "@/components/order_page/payments/OrderSuccess";
import React from "react";

export default function Page() {
  return (
    <div>
      <OrderSuccess 
      title=' Back to orders' 
      path="/order/create_new_order"/>
    </div>
  );
}
