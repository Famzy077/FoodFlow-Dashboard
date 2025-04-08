import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='border border-secondary p-10 rounded-3xl mt-6 mb-4'>
      <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-3xl font-bold'>Vendors Name</h1>
      
       <p className='text-xl text-center'>#3874</p>
      <div className='flex flex-col gap-2 text-center'>
      <p className='text-sm'>Jemmastone2@gmail.com</p>
      <p className='text-sm'>No 4 ike  road amaku</p>
      </div>
        <div className='flex gap-6 items-center'>
            <p className='text-gray'>Last activity</p>
            <p>DD/MM/YYY</p>
       </div>
      </div>

      {/* process ----3 boxes */}
      <div className='grid md:grid-cols-3 grid-cols-1 items-center gap-4 w-full  justify-center my-6'>
        <div className='flex flex-col gap-6 justify-center items-center border border-secondary rounded-2xl px-10 py-14'>
            <p className='h-10 w-10 bg-secondary text-gray rounded-full text-center flex justify-center items-center text-xl font-semibold'>1</p>
            <p className='font-semibold'>Purchase</p>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center border border-secondary rounded-2xl px-10 py-14'>
            <p className='h-10 w-10 bg-secondary text-gray rounded-full text-center flex justify-center items-center text-xl font-semibold'>2</p>
            <p className='font-semibold'>Total Payments</p>
        </div>
        <div className='flex flex-col gap-6 border justify-center items-center border-secondary rounded-2xl px-10 py-14'>
            <p className='h-10 w-10 bg-secondary text-gray rounded-full text-center flex justify-center items-center text-xl font-semibold'>3</p>
            <p className='font-semibold'>Vendor ranking</p>
        </div>
      </div>
      {/* process ----3 boxes */}

      {/* vendors description and recent activities */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 text-sm'>
      {/* Vendor Description Box */}
      <div className="flex-1 bg-white border border-secondary shadow rounded-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Vendor Description</h2>
          <a href="#" className="text-orange-600 text-sm font-semibold">
            Change
          </a>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">⭐</span>
            <span className='flex justify-between w-full'>Type: <strong className='text-end float-right'>Produce supply</strong></span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">⭐</span>
            <span className='flex justify-between w-full'>Value of purchases: <strong className='text-end float-right'>₦25,000.00</strong></span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">⭐</span>
            <span className='flex justify-between w-full'>Item name: <strong className='text-end float-right'>Rice paddy</strong></span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">⭐</span>
            <span className='flex justify-between w-full'>Quantity: <strong className='text-end float-right'>20 bags</strong></span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">⭐</span>
            <span className='flex justify-between w-full'>Duration: <strong className='text-end float-right'>2 years</strong></span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">⭐</span>
            <span className='flex justify-between w-full '>Frequency of purchases: <strong className='text-end float-right'>Semi-annually</strong></span>
          </li>
        </ul>
      </div> 

        {/* Recent Activity Box */}
        <div className="flex-1 bg-white border border-secondary shadow rounded-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Recent Activity</h2>
          <Link href='/back_office/vendor/vendorDetails/allVendors/VendorInfo/VendorsName' prefetch={true} className="text-orange-600 text-sm font-semibold">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-gray-500 text-left">
                <th className="pb-2">Date</th>
                <th className="pb-2">Invoice #</th>
                <th className="pb-2">Currency</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="py-2">09 Apr 2022</td>
                <td className="py-2">0074</td>
                <td className="py-2">NRA</td>
                <td className="py-2">₦7,363.32</td>
                <td className="py-2">
                  <span className="text-yellow-500 font-semibold">Pending</span>
                </td>
              </tr>
              <tr className="">
                <td className="py-2">09 Apr 2022</td>
                <td className="py-2">0026</td>
                <td className="py-2">NRA</td>
                <td className="py-2">₦7,363.32</td>
                <td className="py-2">
                  <span className="text-red-500 font-semibold">Overdue</span>
                </td>
              </tr>
              <tr className="">
                <td className="py-2">09 Apr 2022</td>
                <td className="py-2">0003</td>
                <td className="py-2">NRA</td>
                <td className="py-2">₦126</td>
                <td className="py-2">
                  <span className="text-green-500 font-semibold">Paid</span>
                </td>
              </tr>
              <tr className="">
                <td className="py-2">09 Apr 2022</td>
                <td className="py-2">0056</td>
                <td className="py-2">NRA</td>
                <td className="py-2">₦0.32</td>
                <td className="py-2">
                  <span className="text-green-500 font-semibold">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      {/* vendors description and recent activities */}
    </div>
  )
}

export default page
