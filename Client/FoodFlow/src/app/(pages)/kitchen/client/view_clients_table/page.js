"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { inventoryData } from "../../../../../utils/Inventorydata";
import ViewClient from "@/components/client/ViewClientTable";

export default function Page() {
  // const [records, setRecords] = useState(jsonData);
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const limitAlerts = inventoryData.filter(
    (row) => row.quantityalert === "alerted"
  );
  // //console.logog(pendingProcurements);


  return (
    <>
      <div className="px-5">
        <div className="absolute top-[-2.9rem]">
          <h1 className=" font-bold text-3xl">Client</h1>
        </div>
        <section className="border-2 w-[93%] mb-5 h-[fit-content] border-zinc-400 rounded-2xl mt-10 p-6 overflow:hidden">
          <div className="flex items-center justify-between p-3">
            <ul className="border bg-primary bg-opacity-30 text-white p-2 rounded-full">
              <div className="flex justify-between space-x-2">
                <button
                  onClick={() => handleButtonClick("All")}
                  className={`${
                    activeButton === "All"
                      ? "bg-primary rounded-full px-10 py-3"
                      : "px-10 py-3"
                  }
                  transition-all duration-300 ease-linear`}
                >
                  All
                </button>

                <button
                  onClick={() => handleButtonClick("Limit Alerts")}
                  className={`${
                    activeButton === "Limit Alerts"
                      ? "bg-primary rounded-full px-10 py-3"
                      : "px-10 py-3"
                  }
                transition-all duration-300 ease-linear`}
                >
                  Limit Alerts
                </button>
              </div>
            </ul>

            <div
              className="flex justify-between align-center gap-5
        border border-primary rounded-full py-1 px-7 text-primary hover:bg-primary hover:text-white"
            >
              <Image
                priority
                src="/images/inventory/filter.svg"
                alt="filter icon"
                width="24"
                height="24"
              />
              <button>Filter</button>
            </div>
          </div>

          <div>
            {activeButton === "All" && (
              <div> <ViewClient data={inventoryData}/> </div>
            )}
            {activeButton === "Limit Alerts" && (
              <div>
                <ViewClient data={limitAlerts} />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
