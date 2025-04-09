"use client";
import React, { useState } from "react";
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import Procurement_manager_modal from "./Procurement_manager_modal";
import Image from "next/image";
import ProcurementImage from "/public/images/icons/Image_one.svg";
import { procurementTable } from "../../../utils/procurementTable";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { apiClient2 } from "@/services/AxiosApiClient";
import Spinner from '@/components/indicators/Spinner';

export default function Procurement_page() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    dispatch(openModal());
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const countAll = procurementTable.length; // Total count of all items

  const countPending = procurementTable.filter(
    (item) => item.status === "pending"
  ).length;

  const countDelivered = procurementTable.filter(
    (item) => item.status === "delivered"
  ).length;


  const getAllProcurements = async () => {
    try {
      const response = await apiClient2.get("/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching procurements:", error);
      throw error;
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Procurements"],
    queryFn: getAllProcurements,
    onSuccess: (data) => {
      ////////console.logogogog(data);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      ////console.log(error.response.data.message);
    },
  });

  return (
    <div className="px-10 relative m-2">
      {/* <Spinner/> */}
      <button
        className="absolute top-0 right-[48px] p-2 bg-primary text-white rounded-lg w-[27%]"
        onClick={handleOpenModal}
      >
        <h1 className="">Procurement Manager</h1>
      </button>
      {isModalOpen && (
        <Procurement_manager_modal handleCloseModal={handleCloseModal} />
      )}

      <div className="pt-16">
        <section className="flex justify-between gap-[0.07rem] space-x-2">
          <div className="border border-secondary p-3 w-full rounded-lg hover:bg-primary hover:text-white">
            <h1 className="font-medium">Total Procurement notices</h1>
            <h1 className="font-bold text-[36px] mt-5">{countAll}</h1>
            <p className="mt-5">+ increased by 20% since December 2022</p>
          </div>
          <div className="border border-secondary w-full hover:bg-primary p-3 hover:text-white rounded-lg hover: ">
            <h1 className="font-medium">Pending Procurement notices</h1>
            <h1 className="font-bold text-[36px] mt-5">{countPending}</h1>
            <p className="mt-5 text-green-600">
              + increased by 20% since December 2022
            </p>
          </div>
          <div className="border border-secondary w-full hover:bg-primary p-3 hover:text-white rounded-lg  hover: ">
            <h1 className="font-medium">Delivered Procurement</h1>
            <h1 className="font-bold text-[36px] mt-5">{countDelivered}</h1>
            <p className="mt-5 text-red-600">
              - decreased by 20% since December 2022
            </p>
          </div>
        </section>
      </div>

      <Link
        className="absolute top-[250px] right-[48px] p-2 border border-primary bg-white text-primary rounded-lg w-[27%] cursor-pointer text-center"
        href="/kitchen/procurement/procurement_view_inventory"
      >
        <p>View Custom report</p>
      </Link>

      <div className="border border-secondary w-[93%] h-[60vh] absolute top-[350px] rounded-lg">
        <div className="flex justify-between p-6 text-[24px]">
          <h1>History</h1>
          <h1 className="underline underline-offset-4 text-primary cursor-pointer">
            View all
          </h1>
        </div>

        <hr className="text-secondary" />
        <section className="flex justify-evenly text-center items-center">
          <div>
            <h1 className="font-medium">
              You have no previous inventory changes
            </h1>
            <h3 className="font-medium mt-10">
              Create your first inventory item
            </h3>
            <p>just click the "procurement manager" button above</p>
          </div>
          <div className="mt-5">
            <Image
              src={ProcurementImage}
              style={{ objectFit: "contain", width: "199px", height: "216px" }}
              alt="no previous inventory"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
