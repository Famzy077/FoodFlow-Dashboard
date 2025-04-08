"use client";
import { FactoryIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { FaPlus, FaEye } from "react-icons/fa";

const page = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the state
  };

  const [payments, setPayments] = useState([
    {
      name: "Anna Patrick",
      amount: "₦3500",
      date: "Fri May 13, 2023, GMT 2:00",
    },
    {
      name: "Anna Patrick",
      amount: "₦5500",
      date: "Fri May 13, 2023, GMT 2:00",
    },
    {
      name: "Anna Patrick",
      amount: "₦2500",
      date: "Fri May 13, 2023, GMT 2:00",
    },
    {
      name: "Anna Patrick",
      amount: "₦6500",
      date: "Fri May 13, 2023, GMT 2:00",
    },
  ]);

  return (
    <div className='md:px-10 px-8 mt-5'>
      {/* Top Button */}
      <div className='flex justify-end mb-6'>
        <button
          className='bg-primary text-white py-2 px-6 rounded-md shadow hover:bg-orange-600'
          onClick={toggleDropdown}
        >
          Vendors Manager
        </button>
      </div>

      {isDropdownOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md'>
          <ul className='space-y-2 p-2'>
            <Link
              href='/back_office/vendor/vendorDetails/allVendors/VendorInfo/VendorsName/DetailsForm'
              prefetch={true}
            >
              <li className='flex items-center space-x-2 cursor-pointer'>
                <FaPlus />
                <span>Add Vendor</span>
              </li>
            </Link>
            <Link
              href='/back_office/vendor/vendorDetails/allVendors'
              prefetch={true}
            >
              <li className='flex items-center space-x-2 cursor-pointer'>
                <FaEye />
                <span>View All Vendors</span>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {/* Metrics Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6  w-full '>
        {/* Total Vendors */}
        <div className='bg-primary border border-secondary shadow rounded-md py-4 px-6 text-white flex flex-col gap-1'>
          <div className='w-full text-black text-sm flex justify-end'>
            <p>
              <FactoryIcon />
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-sm text-gray-500'>Total Vendors</h3>
            <p className='text-4xl font-bold '>10</p>
            <p className='text-sm '>+ increased by 20% since Dec 2022</p>
          </div>
        </div>
        {/* Recurring Vendors */}
        <div className='bg-white border border-secondary shadow rounded-md py-4 px-6 text-black flex flex-col gap-1'>
          <div className='w-full text-black text-sm flex justify-end'>
            <p>
              <FactoryIcon />
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-sm text-gray-500'>Recurring Vendors</h3>
            <p className='text-4xl font-bold text-black'>10</p>
            <p className='text-sm text-gray-500'>
              + increased by 20% since Dec 2022
            </p>
          </div>
        </div>
        {/* Vendor Payments */}
        <div className='bg-white border border-secondary shadow rounded-md py-4 px-6 text-black flex flex-col gap-1'>
          <div className='w-full text-black text-sm flex justify-end'>
            <p>
              <FactoryIcon />
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-sm text-gray-500'>Vendor Payments</h3>
            <p className='text-4xl font-bold text-black'>10</p>
            <p className='text-sm text-gray-500'>
              - Decreased by 20% since Dec 2022
            </p>
          </div>
        </div>
      </div>

      {/* Custom Report Button */}
      <div className='flex justify-end mt-3'>
        <button className='py-2 px-6 border border-primary text-primary rounded-md hover:bg-orange-100'>
          View Custom Report
        </button>
      </div>
      {/* History Section */}
      <div className='bg-white p-4 shadow rounded-md w-full  mx-auto my-6 border border-secondary'>
        <div className='flex justify-between items-center mb-4 border-b py-1'>
          <h2 className='text-xl font-bold'>History</h2>
          <Link
            href='/back_office/vendor/vendorDetails/allVendors'
            prefetch={true}
            className='text-primary border-b-2 border-primary font-semibold text-sm'
          >
            View all
          </Link>
        </div>
        <ul>
          {payments.map((payment, index) => (
            <li
              key={index}
              className='flex justify-between items-center py-2 border-b '
            >
              <div className='flex flex-col '>
                <div className='flex items-center space-x-6'>
                  <span className='bg-green-200  rounded-full p-2 text-sm'>
                    <FiArrowDown
                      size={20}
                      className='text-green-600 rotate-45'
                    />
                  </span>
                  <p className='font-semibold'>{`New payment from ${payment.name}`}</p>
                </div>
                <p className='text-gray-500 text-center ml-4'>{payment.date}</p>
              </div>

              <div className='flex items-center space-x-8'>
                <p className='font-bold'>{payment.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
