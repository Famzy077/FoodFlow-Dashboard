import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className='flex justify-center py-3 gap-20 md:px-24'>
        <div className=' border border-secondary px-4 flex justify-between rounded-lg py-6 w-full h-[85vh] gap-10'>
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
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-gray-800 border bg-green-500 text-white border-green-500 bg-gree-500 text-lg'>
                <FaCheck />
              </div>
              <p className='text-xl font-bold'>Payment details</p>
            </div>
            <div className='border-secondary bg-green-500 border w-0 ms-5  h-3 '></div>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-green-500 border border-green-500 text-lg'>
                4
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
              <h1 className='text-2xl font-bold text-gray-800 text-[#4B4B4B]'>
                Recurring Settings
              </h1>
              <p className='text-gray-800 placeholder-[#B1B1B4] outline-none font-semibold'>
                Kindly set recurring protocols for the engagement.
              </p>
            </div>
            {/* Form intake */}
            <div className='mt-6'>
              <ul className='flex flex-col gap-6'>
                <li className='flex gap-6 items-start'>
                  <span className='h-[6px] w-[6px] bg-black mt-3'></span>
                  <div className='flex flex-col gap-4 items-start'>
                    <label className='text-lg text-gray-800 font-semibold'>
                      Duration
                    </label>
                    <div className='flex gap-6 items-center'>
                      <input
                        type='date'
                        className='bg-[#F5F7F9] border border-[#999999] text-[#4B4B4B] px-4 py-2 rounded-md text-gray-800'
                      />
                      <input
                        type='date'
                        className='bg-[#F5F7F9] border border-[#999999] text-[#4B4B4B] px-4 py-2 rounded-md text-gray-800'
                      />
                    </div>
                  </div>
                </li>
                <li className='flex gap-6 items-start'>
                  <span className='h-[6px] w-[6px] bg-black mt-3'></span>
                  <div className='flex flex-col gap-4 items-start'>
                    <label className='text-lg text-gray-800 font-semibold'>
                      Frequency
                    </label>
                    <div>
                      <select className='bg-[#F5F7F9] border border-[#999999] text-[#4B4B4B] px-4 py-2 rounded-md text-gray-800'>
                        <option value='' disabled selected>
                          Select Frequency
                        </option>
                        <option value='daily'>Daily</option>
                        <option value='every-2-days'>Every 2 Days</option>
                        <option value='weekly'>Weekly</option>
                        <option value='every-2-weeks'>Every 2 Weeks</option>
                        <option value='monthly'>Monthly</option>
                        <option value='quarterly'>Quarterly</option>
                        <option value='semi-annually'>Semi Annually</option>
                        <option value='annually'>Annually</option>
                      </select>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className='w-full flex justify-end mt-6 gap-4'>
              <Link
                href='/back_office/vendor/vendorDetails/allVendors/VendorInfo/VendorsName/DetailsForm/ItemsDetails/PaymentDetails'
                prefetch={true}
              >
                <button className='bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600'>
                  Back
                </button>
              </Link>
              <Link
                href='/back_office/vendor/vendorDetails/allVendors/VendorInfo/VendorsName/DetailsForm/ItemsDetails/PaymentDetails/TimeFrame/Summary'
                prefetch={true}
              >
                <button className='bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600'>
                  Continue
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
