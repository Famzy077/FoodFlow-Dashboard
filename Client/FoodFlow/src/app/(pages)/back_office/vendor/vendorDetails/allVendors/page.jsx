"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineFilter } from "react-icons/hi";

const page = () => {
  const [vendors, setVendors] = useState([
    {
      id: "#65789832",
      name: "Okinda Peters",
      loyaltyLevel: "Gold",
      purchaseCount: 50,
      lifetimeValue: "₦3500",
    },
    {
      id: "#65789833",
      name: "Okinda Peters",
      loyaltyLevel: "Silver",
      purchaseCount: 40,
      lifetimeValue: "₦5500",
    },
    {
      id: "#65789834",
      name: "Okinda Peters",
      loyaltyLevel: "Platinum",
      purchaseCount: 60,
      lifetimeValue: "₦6500",
    },
    {
      id: "#65789835",
      name: "Okinda Peters",
      loyaltyLevel: "Gold",
      purchaseCount: 10,
      lifetimeValue: "₦2500",
    },
    {
      id: "#65789836",
      name: "Okinda Peters",
      loyaltyLevel: "Silver",
      purchaseCount: 30,
      lifetimeValue: "₦4500",
    },
    {
      id: "#65789837",
      name: "Okinda Peters",
      loyaltyLevel: "Gold",
      purchaseCount: 20,
      lifetimeValue: "₦3000",
    },
    {
      id: "#65789838",
      name: "Okinda Peters",
      loyaltyLevel: "Platinum",
      purchaseCount: 70,
      lifetimeValue: "₦7000",
    },
  ]);

  // State for dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle dropdown toggle
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="my-4">
      <div className="border border-secondary rounded-2xl p-8 mb-2">
        {/* toggle button and filter button */}
        <div className="flex justify-between items-center">
          <div className="flex items-center py-2 bg-primary bg-opacity-30 rounded-full gap-4 px-3">
            <button className="py-2 px-10 rounded-full text-white bg-primary text-lg">
              All
            </button>
            <button className="text-secondary ">Supply Alert </button>
          </div>
          <div>
            <button className="border border-primary py-2 px-8 rounded-3xl text-primary flex items-center gap-1">
              <HiOutlineFilter /> Filter
            </button>
          </div>
        </div>
        {/* toggle button and filter button */}

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow my-4 border border-secondary">
          <table className="w-full table-auto">
            <thead className=" text-gray-700 uppercase text-sm">
              <tr className="border-b border-secondary">
                <th className="py-3 px-4 text-left w-8">
                  <input type="checkbox" />
                </th>
                <th className="py-3 px-4 text-left">Vendor ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Loyalty Level</th>
                <th className="py-3 px-4 text-left">Purchase Count</th>
                <th className="py-3 px-4 text-left">Lifetime Value</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {vendors.map((vendor, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 border-b last:border-b-0"
                >
                  <td className="py-3 px-4 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4 text-primary">{vendor.id}</td>
                  <td className="py-3 px-4">{vendor.name}</td>
                  <td className="py-3 px-4">{vendor.loyaltyLevel}</td>
                  <td className="py-3 px-4">{vendor.purchaseCount}</td>
                  <td className="py-3 px-4">{vendor.lifetimeValue}</td>
                  <td className="py-3 px-4 text-center relative">
                    {/* Action Icon */}
                    <div className="inline-block">
                      <FiMoreVertical
                        className="cursor-pointer text-gray-500"
                        onClick={() => toggleDropdown(index)}
                      />
                      {/* Dropdown */}
                      {activeDropdown === index && (
                        <div className="absolute right-4 mt-2 z-10  bg-white border rounded-md shadow-lg w-32 cursor-pointer">
                         <button className="p-1 w-full duration-300 ease-linear hover:bg-secondary flex items-center gap-1 justify-between  cursor-pointer "><p className="text-red-600 border border-red-600 rounded-full px-1 font-bold text-center">x</p> Delete client</button>
                         <Link href='/back_office/vendor/vendorDetails/allVendors/VendorInfo' prefetch={true}  >
                         <button className="p-1 w-full duration-300 ease-linear hover:bg-secondary flex items-center gap-1 justify-between  cursor-pointer "><p className=" border  font-bold text-center rounded-full px-1">i</p> View Details</button>
                         </Link>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>      
      </div>
      {/* pagination */}
      <div className="flex justify-between items-center md:px-6">
        <p>Showing 12 from 48 data</p>
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
  );
};

export default page;
