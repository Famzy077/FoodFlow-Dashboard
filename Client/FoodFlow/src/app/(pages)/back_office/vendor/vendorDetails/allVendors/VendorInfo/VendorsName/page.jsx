"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiMoreVertical } from "react-icons/fi";
import Link from "next/link";

const page = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="my-8 px-4">
      <div className="flex flex-col gap-3 items-center mt-4 mb-6">
        <h1 className="text-3xl font-bold">Vendors Name</h1>

        <p className="text-xl text-center">#3874</p>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm">Jemmastone2@gmail.com</p>
          <p className="text-sm">No 4 ike road amaku</p>
        </div>
        <div className="flex gap-6 items-center">
          <p className="text-gray">Last activity</p>
          <p>DD/MM/YYY</p>
        </div>
      </div>
      <div className="flex justify-between font-semibold px-6">
        <p>Order ID</p>
        <p>Date</p>
        <p>Vendor Name</p>
        <p>Location</p>
        <p>Amount</p>
        <p>Status Order</p>
      </div>
      <div className="border border-secondary py-8 px-4 rounded-2xl text-[14px] flex flex-col gap-2 mt-4">
        <div className="border border-secondary flex justify-between items-center p-2 rounded">
          <p className="text-primary">#657899831</p>
          <p>12 April 2023,12:43 AM</p>
          <p>Okinda Peters</p>
          <p>No 4 ike road amaku</p>
          <p>&#x20A6;3500</p>
          <div className="flex gap-4 items-center">
            <p className="py-1 px-3 bg-orange-300 border-2 border-orange-500 text-orange-500 rounded-md">
              Pending
            </p>
            <span className="cursor-pointer" onClick={toggleDropdown}>
              {" "}
              <FiMoreVertical />
            </span>
          </div>
        </div>
        <div className="border border-secondary flex justify-between items-center p-2 rounded">
          <p className="text-primary">#657899831</p>
          <p>12 April 2023,12:43 AM</p>
          <p>James ohiomole</p>
          <p>No 4 ike road amaku</p>
          <p>&#x20A6;3500</p>
          <div className="flex gap-4 items-center">
            <p className="py-1 px-3 bg-green-300 border-2 border-green-500 text-green-500 rounded-md">
              Delivered
            </p>
            <span className="cursor-pointer" onClick={toggleDropdown}>
              {" "}
              <FiMoreVertical />
            </span>
          </div>
        </div>
        <div className="border border-secondary flex justify-between items-center p-2 rounded">
          <p className="text-primary">#657899831</p>
          <p>12 April 2023,12:43 AM</p>
          <p>Lilian obasi</p>
          <p>No 4 ike road amaku</p>
          <p>&#x20A6;3500</p>
          <div className="flex gap-4 items-center">
            <p className="py-1 px-3 bg-green-300 border-2 border-green-500 text-green-500 rounded-md">
              Delivered
            </p>
            <span className="cursor-pointer" onClick={toggleDropdown}>
              {" "}
              <FiMoreVertical />
            </span>
          </div>
        </div>
        <div className="border border-secondary flex justify-between items-center p-2 rounded">
          <p className="text-primary">#657899831</p>
          <p>12 April 2023,12:43 AM</p>
          <p>Ibrahim Dada</p>
          <p>No 4 ike road amaku</p>
          <p>&#x20A6;3500</p>
          <div className="flex gap-4 items-center">
            <p className="py-1 px-3 bg-orange-300 border-2 border-orange-500 text-orange-500 rounded-md">
              Pending
            </p>
            <span className="cursor-pointer" onClick={toggleDropdown}>
              {" "}
              <FiMoreVertical />
            </span>
          </div>
        </div>
        <div className="border border-secondary flex justify-between items-center p-2 rounded">
          <p className="text-primary">#657899831</p>
          <p>12 April 2023,12:43 AM</p>
          <p>Egede Obi</p>
          <p>No 4 ike road amaku</p>
          <p>&#x20A6;3500</p>
          <div className="flex gap-4 items-center">
            <p className="py-1 px-3 bg-orange-300 border-2 border-orange-500 text-orange-500 rounded-md">
              Pending
            </p>
            <span className="cursor-pointer" onClick={toggleDropdown}>
              {" "}
              <FiMoreVertical />
            </span>
          </div>
        </div>
        <div className="border border-secondary flex justify-between items-center p-2 rounded">
          <p className="text-primary">#657899831</p>
          <p>12 April 2023,12:43 AM</p>
          <p>Egede Obi</p>
          <p>No 4 ike road amaku</p>
          <p>&#x20A6;3500</p>
          <div className="flex gap-4 items-center">
            <p className="py-1 px-3 bg-green-300 border-2 border-green-500 text-green-500 rounded-md">
              Delivered
            </p>
            <span className="cursor-pointer" onClick={toggleDropdown}>
              {" "}
              <FiMoreVertical />
            </span>
          </div>
        </div>

        {showDropdown  && (
          <div className="absolute right-4 mt-2 z-10  bg-white border rounded-md shadow-lg w-32 cursor-pointer">
            <button className="p-1 w-full duration-300 ease-linear hover:bg-secondary flex items-center gap-1 justify-between  cursor-pointer ">
              <p className="text-red-600 border border-red-600 rounded-full px-1 font-bold text-center">
                x
              </p>{" "}
              Delete client
            </button>
            <Link
              href="/back_office/vendor/vendorDetails/allVendors/VendorInfo/VendorsName/DetailsForm"
              prefetch={true}
            >
              <button className="p-1 w-full duration-300 ease-linear hover:bg-secondary flex items-center gap-1 justify-between  cursor-pointer ">
                <p className=" border  font-bold text-center rounded-full px-1">
                  i
                </p>{" "}
                View Details
              </button>
            </Link>
          </div>
        )}

        {/* pagination */}
        <div className="flex justify-end items-end  md:px-6">
          <div className="flex items-center gap-1">
            <p>
              <ChevronLeft />
            </p>
            <button className="px-2 bg-primary rounded text-white">1</button>
            <button className="px-2 bg-secondary rounded text-gray">2</button>
            <button className="px-2 bg-secondary rounded text-gray">3</button>
            <button className="px-2 bg-secondary rounded text-gray">4</button>
            <p>
              <ChevronRight />
            </p>
          </div>
        </div>
        {/* pagination */}
      </div>
    </div>
  );
};

export default page;
