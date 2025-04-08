import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className='flex justify-center py-3 gap-6 md:px-10'>
        <div className=' border border-secondary px-4 flex justify-between rounded-lg py-6 w-full max-h-[95vh] overflow-y-scroll gap-10'>
          <div className=' flex flex-col  '>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-2'>
                <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-gray-800 border text-white bg-green-500 border-green-500 text-lg'>
                  <FaCheck />
                </div>
                <p className='text-xl font-bold'>Vendors details</p>
              </div>
            </div>

            <div className='border-secondary border w-0 ms-5  h-3 '></div>

            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-gray-800 border bg-green-500 text-white border-secondary text-lg'>
                <FaCheck />
              </div>
              <p className='text-xl font-bold'>Payment details</p>
            </div>

            <div className='border-secondary border w-0 ms-5  h-3 '></div>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-gray-800 border bg-green-500 text-white border-green-500 text-lg'>
                <FaCheck />
              </div>
              <p className='text-xl font-bold'>Payment details</p>
            </div>
            <div className='border-secondary bg-green-500 border w-0 ms-5  h-3 '></div>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-white bg-green-500 border border-green-500 text-lg'>
                <FaCheck />
              </div>
              <p className='text-xl font-bold'>Timeframe</p>
            </div>
            <div className='border-secondary border w-0 ms-5  h-3 '></div>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-gray-800 border border-secondary text-lg'>
                5
              </div>
              <p className='text-xl font-bold'>Summary</p>
            </div>
          </div>
          <div className='border border-[#999999] rounded-md px-10 py-8 h-fit min-w-[65%]'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-bold text-[#4B4B4B]'>
                Recurring Settings
              </h1>
              <p className='text-gray-800 placeholder-[#B1B1B4] outline-none font-semibold'>
                Kindly set recurring protocols for the engagement.
              </p>
            </div>
            {/* Form intake */}
            <div className='mt-6 border border-[#999999] px-8 py-6 rounded-md'>
              <div className='flex flex-col justify-start gap-3 mb-5'>
                <h1 className='font-bold text-lg text-gray-800'>Summary</h1>
                <p className='text-gray-800 placeholder-[#B1B1B4] outline-none font-medium'>
                  Review all information related to this vendor.
                </p>
              </div>
              <div className='flex flex-col gap-6'>
                {[
                  { label: "Vendor's Name", value: "Adetunji Tobi" },
                  { label: "Vendor's Type", value: "Produce Supply" },
                  { label: "Vendor's Contact", value: "07040502680" },
                  { label: "Vendor's Address", value: "16, Mosholashi Street" },
                  { label: "Item Name", value: "Fresh Mango" },
                  { label: "Quantity", value: "20" },
                  { label: "Unit", value: "Bag" },
                  {
                    label: "Description",
                    value: "Farmer has a 1-hectare farm with coordinates 23 NW",
                  },
                  { label: "Amount", value: "12,000" },
                  { label: "Account Number", value: "2862836828" },
                  { label: "Account Name", value: "Adetunji Tobi" },
                  { label: "Bank Name", value: "Opay" },
                  { label: "Start Date", value: "01-12-2023" },
                  { label: "End Date", value: "01-12-2023" },
                  { label: "Frequency", value: "Indefinite" },
                ].map((item, index) => (
                  <div
                    className='flex justify-between items-center'
                    key={index}
                  >
                    <p className='flex items-center gap-4'>
                      <span className='w-[6px] h-[6px] bg-black rounded-full'></span>
                      <span className='text-[#4B4B4B] font-semibold'>
                        {item.label}
                      </span>
                    </p>
                    <p className='text-[#4B4B4B] font-medium'>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='w-full flex justify-end mt-6 gap-4'>
              <Link
                href='/back_office/vendor/vendorDetails/allVendors/VendorInfo/VendorsName/DetailsForm/ItemsDetails/PaymentDetails/TimeFrame'
                prefetch={true}
              >
                <button className='bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600'>
                  Back
                </button>
              </Link>
              <Link
                href='/back_office/vendor/vendorDetails/allVendors'
                prefetch={true}
              >
                <button className='bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600'>
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
