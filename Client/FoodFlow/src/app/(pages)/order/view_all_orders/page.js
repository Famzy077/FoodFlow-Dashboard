"use client";
import React, { useState } from "react";
import Image from "next/image";
import refreshIcon from "/public/images/icons/refresh-icon.png";

import pageMainStyles from "@/components/styles/pageMain.module.css";
// import "../../globals.css";
import "tailwindcss/tailwind.css";

import OfflineOrders from "@/components/order_page/view_all_orders/offlineOrders";
import SuccessfulOrders from "@/components/order_page/view_all_orders/successfulOrders";
import OnlineOrders from "@/components/order_page/view_all_orders/onlineOrders";
import AllOrders from "@/components/order_page/view_all_orders/allOrders";

export default function Page() {
  const [orderRender, setOrderRender] = useState("all");
  return (
    <>
      {/* MAIN COMPONENT OF THE VIEW ALL ORDERS PAGE */}
      {/* COMPONENTS IN "COMPONENTS > ORDER_PAGE > VIEW ALL" */}
      <div className={pageMainStyles.mainComp}>
        {/* TOP BAR AND REFRESH ICON */}
        <div className={pageMainStyles.topBar}>
          <Image src={refreshIcon} alt="refresh icon" />
        </div>
        <div className={pageMainStyles.btnCont}>
          <button
            className={
              orderRender === "all"
                ? pageMainStyles.firstBtn
                : pageMainStyles.online
            }
            onClick={() => setOrderRender("all")}
          >
            All Orders
          </button>
          <button
            className={
              orderRender === "online"
                ? pageMainStyles.secondtBtn
                : pageMainStyles.online
            }
            onClick={() => setOrderRender("online")}
          >
            Online Orders
          </button>
          <button
            className={
              orderRender === "offline"
                ? pageMainStyles.thirdBtn
                : pageMainStyles.online
            }
            onClick={() => setOrderRender("offline")}
          >
            Offline Orders
          </button>
          <button
            className={
              orderRender === "successful"
                ? pageMainStyles.fourthBtn
                : pageMainStyles.online
            }
            onClick={() => setOrderRender("successful")}
          >
            Successful Orders
          </button>
        </div>
        {orderRender === "all" ? (
          <AllOrders />
        ) : orderRender === "online" ? (
          <OnlineOrders />
        ) : orderRender === "offline" ? (
          <OfflineOrders />
        ) : orderRender === "successful" ? (
          <SuccessfulOrders />
        ) : (
          <h2>No Data</h2>
        )}
      </div>
    </>
  );
}
