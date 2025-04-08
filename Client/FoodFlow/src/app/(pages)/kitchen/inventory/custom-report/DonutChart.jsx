"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the elements you need
ChartJS.register(ArcElement, Tooltip, Legend);

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DonutChart = ({ title, data }) => {
  const chartData = {
    labels: data.map((entry) => entry.name),
    datasets: [
      {
        data: data.map((entry) => entry.value),
        backgroundColor: data.map((entry) => entry.color),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%", // Makes the chart look like a donut
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <Card className='min-w-[20rem] border border-[#E1E5E8] p-4'>
      <CardHeader>
        <CardTitle className='text-center text-xl font-semibold text-[#4B4B4B]'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex justify-center'>
        <Doughnut data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default DonutChart;
