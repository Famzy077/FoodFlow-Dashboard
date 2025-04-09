"use client";
import React, { useEffect, useState } from "react";
import { procurementTable } from "../../../utils/procurementTable";
import ViewProcurementTable from "./procurement_table/ViewProcurementTable";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/indicators/Spinner";
import { IoFilter } from "react-icons/io5";

export default function ViewProcurement() {
  const [activeButton, setActiveButton] = useState("All");
  const [token, setToken] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const pendingProcurements = procurementTable.filter(
    (item) => item.status === "pending"
  );
  // ////console.log(pendingProcurements);

  const deliveredProcurements = procurementTable.filter(
    (item) => item.status === "delivered"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getToken = localStorage.getItem("auth_token");
      setToken(getToken || "");
    }
  }, []);

  const getAllProcurements = async () => {
    if (!token) {
      return null;
    }

    //console.log("Running", token);

    try {
      const response = await fetch(
        // "https://dinerpro-backend-cdq6.onrender.com/procurement",
        "http://localhost:5000/procurement",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Could not fetch procurements");
      }

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Procurements", token],
    queryFn: getAllProcurements,
    enabled: !!token,
  });

  useEffect(() => {
    if (data) {
      //console.log("Procurement data", data);
    }
  }, [data]);

  return (
    <div className="px-12">
      {isLoading && <Spinner />}
      <div className="p-12 border w-full h-[829px] border-secondary rounded-lg">
        <div className="flex justify-between items-center">
          <div className="rounded-full bg-[#ffab0271] w-[670px] h-16 py-7 flex justify-center">
            <div className="flex justify-center text-center items-center">
              <button
                onClick={() => handleButtonClick("All")}
                className={`flex rounded-full py-[16px] px-[40px] mr-[40px] text-white ${
                  activeButton === "All" ? "bg-primary" : ""
                } transition-all duration-300 ease-linear`}
              >
                All
              </button>

              <button
                onClick={() => handleButtonClick("Pending Procurement")}
                className={`flex rounded-full py-[16px] px-[40px] text-white ${
                  activeButton === "Pending Procurement" ? "bg-primary" : ""
                } transition-all duration-300 ease-linear`}
              >
                Pending Procurement
              </button>

              <button
                onClick={() => handleButtonClick("Delivered Procurement")}
                className={`flex rounded-full py-[16px] px-[40px] ml-[40px] text-white ${
                  activeButton === "Delivered Procurement" ? "bg-primary" : ""
                } transition-all duration-300 ease-linear`}
              >
                Delivered Procurement
              </button>
            </div>
          </div>
          <button className="border border-primary text-primary rounded-full h-10 px-6 flex gap-2 justify center items-center">
            <IoFilter /> Filter
          </button>
        </div>

        {activeButton === "All" && data && (
          <div>
            <ViewProcurementTable data={data.data} />
          </div>
        )}
        {activeButton === "Pending Procurement" && data && (
          <div>
            <ViewProcurementTable
              data={data.data.filter((item) => item.status !== "successful")}
            />
          </div>
        )}
        {activeButton === "Delivered Procurement" && data && (
          <div>
            <ViewProcurementTable
              data={data.data.filter((item) => item.status !== "pending")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
