import React from "react";
import Image from "next/image";

let record = true;

const row = [
  {
    name: "New payment from Anna Patrick",
    date: "Fri Jun 15,2022 GMT 13:00",
    amount: "3500",
  },
  {
    name: "New payment from Anna Patrick",
    date: "Fri Jun 15,2022 GMT 13:00",
    amount: "3500",
  },
  {
    name: "New payment from Anna Patrick",
    date: "Fri Jun 15,2022 GMT 13:00",
    amount: "3500",
  },
  {
    name: "New payment from Anna Patrick",
    date: "Fri Jun 15,2022 GMT 13:00",
    amount: "3500",
  },
  {
    name: "New payment from Anna Patrick",
    date: "Fri Jun 15,2022 GMT 13:00",
    amount: "3500",
  },
  {
    name: "New payment from Anna Patrick",
    date: "Fri Jun 15,2022 GMT 13:00",
    amount: "3500",
  },
];

const PaymentsTable = () => {
  return (
    <>
      <div className="border h-[65vh] rounded-lg flex flex-grow flex-col overflow-auto">
        <div className="flex z-20 flex-row justify-between p-4 border-b-2 border-b-zinc-400 sticky top-0 left-0 right-0 bg-white">
          <h1 className="text-2xl ml-[3rem] font-semibold">History</h1>
          <h1 className="text-primary text-2xl mr-[5rem]">View all</h1>
        </div>

        {record ? (
          <div>
            {row.map((row, index) => (
              <section
                key={index}
                className="flex items-center justify-between mx-10 p-5 border-b-2 border-b-zinc-300"
              >
                <div className="flex items-center space-x-5">
                  <div className="bg-[#9FF1CA] p-3 rounded-full">
                    <Image
                      priority
                      src="/images/inventory/addition.svg"
                      alt="addition icon"
                      width={24}
                      height={24}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">{row.name}</p>
                    <p className="text-[#999999] text-base font-medium">
                      {row.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mr-3">
                  <div>
                    <Image
                      priority
                      src="/images/inventory/Naira.svg"
                      alt="naira icon"
                      width={24}
                      height={24}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">{row.amount}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-around mt-10">
            <p className="text-sm">
              {" "}
              You have no previous inventory changes <br />
              create your first inventory item,
              <br />
              just click the ' ' button to begin.
            </p>
            <Image
              priority
              src="/images/inventory/inventory_bg.png"
              alt="bg-image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20%", height: "auto" }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentsTable;
