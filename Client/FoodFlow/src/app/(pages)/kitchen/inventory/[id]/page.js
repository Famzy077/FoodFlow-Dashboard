"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Cup from "../../../../../../public/images/icons/bi_cup.svg";
import Clipboard from "../../../../../../public/images/icons/clipboard.svg";
import User from "../../../../../../public/images/icons/ph_users-thin.svg";
import Naira from "../../../../../../public/images/icons/naira.svg";
import ArrowRight from "../../../../../../public/images/icons/arrow-right.svg";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Spinner from "@/components/indicators/Spinner";

import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { display: false },
    y: { display: false },
  },
  elements: {
    line: { borderColor: "#FBBF24", borderWidth: 2, tension: 0.3 },
    point: { radius: 0 },
  },
};

const dataTemplate = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: [10, 20, 15, 30, 25, 35, 30],
      fill: true,
      backgroundColor: "rgba(251, 191, 36, 0.2)", // Light orange fill color
      borderColor: "#FBBF24", // Line color to match the fill
    },
  ],
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#A3A3A3" }, // Color of x-axis labels
    },
    y: {
      grid: { color: "#E5E5E5" }, // Gridline color for y-axis
      ticks: { color: "#A3A3A3", stepSize: 20 }, // Color and step size for y-axis labels
    },
  },
};

const barChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [70, 50, 90, 120, 80, 60, 85, 75, 65, 70, 100, 120], // Sample data
      backgroundColor: "#FBBF24",
      borderRadius: 4,
    },
  ],
};

const cardsData = [
  {
    title: "Menus",
    value: 54,
    trend: "+4%",
    icon: Cup,
    chartData: dataTemplate,
  },
  {
    title: "Orders",
    value: 120,
    trend: "+2.5%",
    icon: Clipboard,
    chartData: dataTemplate,
  },
  {
    title: "Customers",
    value: 30,
    trend: "-3%",
    icon: User,
    chartData: dataTemplate,
  },
  {
    title: "Income",
    value: "₦115,000",
    trend: "-3%",
    icon: Naira,
    chartData: dataTemplate,
  },
];

// Sample data to populate the table
const invoiceData = [
  {
    date: "09 Apr 2022",
    invoiceNumber: "0074",
    currency: "NRA",
    amount: "7363.32",
    status: "Pending",
  },
  {
    date: "09 Apr 2022",
    invoiceNumber: "0026",
    currency: "NRA",
    amount: "7363.32",
    status: "Overdue",
  },
  {
    date: "09 Apr 2022",
    invoiceNumber: "0003",
    currency: "NRA",
    amount: "126",
    status: "Overdue",
  },
  {
    date: "09 Apr 2022",
    invoiceNumber: "0056",
    currency: "NRA",
    amount: "0.32636232",
    status: "Paid",
  },
  {
    date: "09 Apr 2022",
    invoiceNumber: "0019",
    currency: "NRA",
    amount: "1.32636232",
    status: "Paid",
  },
  {
    date: "09 Apr 2022",
    invoiceNumber: "0074",
    currency: "NRA",
    amount: "7363.32",
    status: "Pending",
  },
  {
    date: "09 Apr 2022",
    invoiceNumber: "0026",
    currency: "NRA",
    amount: "7363.32",
    status: "Overdue",
  },
];

// Status badge styling based on status type
const getStatusBadgeClass = (status) => {
  switch (status) {
    case "Pending":
      return "bg-[#FEF9CD] text-[#E0CA04]";
    case "Overdue":
      return "bg-[#FECDD4] text-[#E00525]";
    case "Paid":
      return "bg-[#9FF1CA] text-[#049561]";
    default:
      return "";
  }
};

// Fetch inventory data on initial load

export default function Page() {
  const params = useParams(); // Get params from the route
  const id = params.id; // Access the `id` parameter
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      //console.log("ID from the route:", id);
    }
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("auth_token");
      try {
        setLoading(true);
        const response = await fetch(
          // `https://dinerpro-backend-cdq6.onrender.com/products/${id}`,
          `http://localhost:5000/products/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        const newData = data.data;
        //console.log("Fetched data:", data);

        if (newData) {
          setEventData(newData);
          //console.log(eventData, "Event data");
        } else {
          console.error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      {loading && (
        <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50'>
          <Spinner />
        </div>
      )}
      <div className='h-full w-full border border-[#FFA902] p-4 my-4'>
        {/* Header Section */}
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center space-x-2'>
            <h1 className='text-lg font-bold'>Inventory #3874</h1>
            <span className='text-gray-500'>01:00 PM (Just now)</span>
          </div>
          <div className='flex items-center space-x-2'>
            {/* Time Range Button */}
            <button className='flex items-center px-3 py-2 text-black bg-[#F0F0F2] rounded-lg'>
              <span className='ml-1'>Jan 2022-Dec 2022</span>
            </button>

            {/* Period Selection Buttons */}
            <div className='flex space-x-1'>
              <button className='px-2 py-2 border rounded-md text-gray-700 hover:bg-orange-100'>
                1M
              </button>
              <button className='px-2 py-2 border rounded-md text-gray-700 hover:bg-orange-100'>
                3M
              </button>
              <button className='px-2 py-2 border rounded-md text-gray-700 hover:bg-orange-100'>
                6M
              </button>
              <button className='px-2 py-2 border rounded-md text-gray-700 hover:bg-orange-100'>
                1Y
              </button>
            </div>

            {/* Status Badge */}
            <div className='px-3 py-2 bg-[#9FF1CA] border border-[#049561] text-[#049561] rounded-xl'>
              Available
            </div>

            {/* Share Report Button */}
            <button className='flex items-center px-4 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-500'>
              <span className='ml-1'>Share report</span>
            </button>
          </div>
        </div>

        {/* Detail Section */}
        <div className='grid grid-cols-3 gap-4 text-sm max-w-3xl'>
          {/* Item Name */}
          <div>
            <p className='text-[#A3A3A3] text-xl'>Item name</p>
            <p className='font-bold text-sm'>{eventData?.name || "N/A"}</p>
          </div>

          {/* Brand */}
          <div>
            <p className='text-[#A3A3A3] text-xl'>Brand</p>
            <p className='font-bold text-sm'>{eventData?.brand || "N/A"}</p>
          </div>

          {/* Turnover Time */}
          <div className=''>
            <p className='text-[#A3A3A3] text-xl'>Turnover time</p>
            <p className='font-bold text-sm'>3 days</p>
          </div>

          {/* Initial Quantity */}
          <div>
            <p className='text-[#A3A3A3] text-xl'>Initial quantity</p>
            <p className='font-bold text-sm'>
              {eventData?.quantityNumber || "N/A"}
            </p>
          </div>

          {/* Current Quantity */}
          <div>
            <p className='text-[#A3A3A3] text-xl'>Current quantity</p>
            <p className='font-bold text-sm'>
              {eventData?.quantityNumber || "N/A"}
            </p>
          </div>
        </div>

        {/* Card and Chart Section */}
        <div className='grid grid-cols-4 gap-4 mt-4'>
          {cardsData.map((card, index) => (
            <div key={index} className='bg-white shadow-lg rounded-lg p-4'>
              <div className='flex justify-between items-center'>
                <div>
                  <div className='flex gap-2 items-center'>
                    <p className='text-2xl font-bold'>{card.value}</p>
                    <p
                      className={`text-sm ${card.trend.startsWith("-") ? "text-red-600" : "text-green-600"}`}
                    >
                      {card.trend}
                    </p>
                  </div>
                  <p className='text-gray-600'>{card.title}</p>
                </div>
                <Image src={card.icon} alt='Card icon' width={24} height={24} />
              </div>
              <div className='h-16 mt-2'>
                <Line data={card.chartData} options={chartOptions} />
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-4 mt-4'>
          {/* Bar chart */}
          <div className='p-6 bg-white rounded-xl shadow-lg'>
            {/* Header */}
            <div className='flex justify-between items-center mb-4'>
              <h1 className='text-lg font-bold text-black flex items-center'>
                <span className='text-orange-500 mr-2'>|</span>
                Consumption data
              </h1>
              <div className='flex space-x-2'>
                <button className='px-4 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100'>
                  Monthly
                </button>
                <button className='px-4 py-1 bg-black text-white rounded-lg'>
                  Weekly
                </button>
              </div>
            </div>

            {/* Bar Chart */}
            <div className='h-60'>
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>
          {/* Recent Invoices */}
          <div className='p-6 bg-white rounded-xl shadow-lg'>
            <div className='flex justify-between items-center mb-4'>
              <h1 className='text-lg font-bold'>Recent invoices</h1>
              <button className='text-orange-500 font-semibold hover:underline'>
                View all
              </button>
            </div>

            {/* Table */}
            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='text-gray-500 text-sm border-b'>
                    <th className='py-2 px-4'>Date</th>
                    <th className='py-2 px-4'>Invoice #</th>
                    <th className='py-2 px-4'>Currency</th>
                    <th className='py-2 px-4'>Amount</th>
                    <th className='py-2 px-4'>Status</th>
                    <th className='py-2 px-4'></th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.map((invoice, index) => (
                    <tr key={index} className='border-b last:border-none'>
                      <td className='py-2 px-4'>{invoice.date}</td>
                      <td className='py-2 px-4'>{invoice.invoiceNumber}</td>
                      <td className='py-2 px-4'>{invoice.currency}</td>
                      <td className='py-2 px-4'>{invoice.amount}</td>
                      <td className='py-2 px-4'>
                        <span
                          className={`px-2 py-1 text-sm rounded ${getStatusBadgeClass(invoice.status)}`}
                        >
                          {invoice.status}
                        </span>
                      </td>
                      <td className='py-2 px-4'>
                        <Image
                          src={ArrowRight}
                          width={24}
                          height={24}
                          alt='Arrow right'
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
