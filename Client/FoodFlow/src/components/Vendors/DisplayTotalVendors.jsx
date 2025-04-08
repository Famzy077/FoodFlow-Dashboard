import React from "react";

const DisplayTotalVendors = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center mt-4">
        <div className="py-5 bg-primary border border-secondary text-white shadow-md rounded-xl flex flex-col gap-3 justify-start px-5">
          <div className="w-full flex justify-end cursor-pointer">
            <p className="text-black flex flex-col max-w-[13px] rounded border-2 justify-end">
              <p className="border-b-2 border-black px-[5px] py-[1px] rounded"></p>
              <p className="border-b-2 border-black px-[5px] py-[1px] rounded"></p>
              <p className="border-b-2 border-black px-[5px] py-[1px] rounded"></p>
            </p>
          </div>
          <div>
            <p className="font-semibold">Total Vendors</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold">10</p>
            <p>+increased by 20% since Dec 2022</p>
          </div>
        </div>
        <div className="py-5 bg-white border border-secondary text-black shadow-md rounded-xl flex flex-col gap-3 justify-start px-5">
          <div className="w-full flex justify-end cursor-pointer">
            <p className="text-black flex flex-col max-w-[13px] rounded border-2 justify-end">
              <p className="border-b-2 border-black px-[5px] py-[1px] rounded"></p>
              <p className="border-b-2 border-black px-[5px] py-[1px] rounded"></p>
              <p className="border-b-2 border-black px-[5px] py-[1px] rounded"></p>
            </p>
          </div>
          <div>
            <p className="font-semibold">Recurring Vendors</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold">10</p>
            <p className="text-green-600">+increased by 20% since Dec 2022</p>
          </div>
        </div>
        <div className="py-5 bg-white text-black border border-secondary  shadow-md rounded-xl flex flex-col gap-3 justify-start px-5">
          <div className="w-full flex justify-end cursor-pointer">
            <p className="text-black flex flex-col max-w-[13px] rounded border-2 justify-end">
              <p className="border-b-2 border-black px-[5px] py-[1px] rounded"></p>
              <p className="border-b-2 border-black px-[5px] py-[1px] rounded"></p>
              <p className="border-b-2 border-black px-[5px] py-[1px] rounded"></p>
            </p>
          </div>
          <div>
            <p className="font-semibold">Vendors payments</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold">10</p>
            <p className="text-red-600">-Decrease by 20% since Dec 2022</p>
          </div>
        </div>
      </div>
      {/* custom report button */}
      <div className="my-1 flex justify-end">
        <button className="py-3 px-6 border border-primary text-primary rounded-md">
          View Custom report
        </button>
      </div>
    </div>
  );
};

export default DisplayTotalVendors;
