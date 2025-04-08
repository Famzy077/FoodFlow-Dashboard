import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className='flex justify-center py-3 gap-20 md:px-24'>
        <div className='border border-secondary px-4 flex justify-between rounded-lg py-6 w-full h-[85vh] gap-10'>
          <div className=' flex flex-col  '>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-2'>
                <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-white border bg-green-600 border-green-500 '>
                  <FaCheck />
                </div>
                <p className=' font-bold'>Vendors details</p>
              </div>
            </div>

            <div className='border-secondary border w-0 ms-5  h-3 '></div>

            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-gray-800 border border-green-500 '>
                2
              </div>
              <p className=' font-bold'>Items details</p>
            </div>

            <div className='border-secondary border w-0 ms-5  h-3 '></div>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-gray-800 border border-secondary '>
                3
              </div>
              <p className=' font-bold'>Payment details</p>
            </div>
            <div className='border-secondary border w-0 ms-5  h-3 '></div>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-gray-800 border border-secondary '>
                4
              </div>
              <p className=' font-bold'>Timeframe</p>
            </div>
            <div className='border-secondary border w-0 ms-5  h-3 '></div>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-[100%]  flex items-center justify-center text-gray-800 border border-secondary '>
                5
              </div>
              <p className=' font-bold'>Summary</p>
            </div>
          </div>
          <div className='border border-[#999999] rounded-md px-10 py-8 h-fit min-w-[65%]'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-bold text-gray-800 text-[#4B4B4B]'>
                Item Details
              </h1>
              <p className='text-gray-800 placeholder-[#B1B1B4] outline-none font-semibold'>
                This is where you enter the details of the item.
              </p>
            </div>
            {/* Form intake */}
            <div className='mt-6'>
              <ul className='flex flex-col gap-6'>
                <li className='list-none'>
                  <div className='space-y-2'>
                    <label className='text-lg text-gray-800 font-semibold'>
                      Item Name
                    </label>
                    <input
                      type='text'
                      placeholder='Enter item name'
                      className='block min-w-[20rem] border border-[#999999] bg-[#F5F7F9] text-gray-800 placeholder-[#B1B1B4] outline-none rounded-md px-4 py-2 text-gray-800'
                    />
                  </div>
                </li>
                <li className='list-none'>
                  <div className='space-y-2'>
                    <label className='text-lg text-gray-800 font-semibold'>
                      Quantity
                    </label>
                    <input
                      type='text'
                      placeholder='Enter quantity'
                      className='block min-w-[20rem] border border-[#999999] bg-[#F5F7F9] text-gray-800 placeholder-[#B1B1B4] outline-none rounded-md px-4 py-2 text-gray-800'
                    />
                  </div>
                </li>
                <li className='list-none'>
                  <div className='space-y-2'>
                    <label className='text-lg text-gray-800 font-semibold'>
                      Unit
                    </label>
                    <select className='block min-w-[20rem] border border-[#999999] bg-[#F5F7F9] text-gray-800 placeholder-[#B1B1B4] outline-none rounded-md px-4 py-2 text-gray-800'>
                      <option value=''>Select unit</option>
                      <option value='bag'>Bag</option>
                      <option value='litres'>Litres (l)</option>
                      <option value='gram'>Gram (g)</option>
                      <option value='kilogram'>Kilogram (kg)</option>
                      <option value='sachets'>Sachets</option>
                      <option value='pound'>Pound (lbs)</option>
                      <option value='tubers'>Tubers</option>
                      <option value='ounce'>Ounce (oz)</option>
                      <option value='tonne'>Tonne</option>
                      <option value='cup'>Cup</option>
                      <option value='basket'>Basket</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>

            <div className='w-full flex justify-end mt-6 gap-4'>
              <Link
                href='/back_office/vendor/vendorDetails/allVendors/VendorInfo/VendorsName/DetailsForm'
                prefetch={true}
              >
                <button className='bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600'>
                  Back
                </button>
              </Link>
              <Link
                href='/back_office/vendor/vendorDetails/allVendors/VendorInfo/VendorsName/DetailsForm/ItemsDetails/PaymentDetails'
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
