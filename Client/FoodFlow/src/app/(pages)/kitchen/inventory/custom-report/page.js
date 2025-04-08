"use client";

import DonutChart from "./DonutChart";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import Cup from "../../../../../../public/images/icons/bi_cup.svg";
import Clipboard from "../../../../../../public/images/icons/clipboard.svg";
import User from "../../../../../../public/images/icons/ph_users-thin.svg";
import Naira from "../../../../../../public/images/icons/naira.svg";

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

export default function Page() {
  const data = [
    { name: "Drinks - Coca cola", value: 40, color: "#9FF1CA" }, // Light green color
    { name: "Dairy - Butter ", value: 60, color: "#FFA902" }, // Purple color
  ];

  return (
    <section className='p-4 m-2'>
      <p className='text-xl text-gray-800 placeholder-[#B1B1B4] outline-none font-bold'>
        Custom Reports
      </p>

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

      <div className='grid grid-cols-3 gap-4 mt-6'>
        <DonutChart title='Inventory distribution' data={data} />
        <DonutChart title='Purchase distribution' data={data} />
        <DonutChart title='Revenue contribution' data={data} />
      </div>
    </section>
  );
}
