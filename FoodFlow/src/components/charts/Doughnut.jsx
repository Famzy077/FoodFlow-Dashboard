'use client'
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJs } from "chart.js/auto"
import { CategoryScale } from "chart.js";

ChartJs.register(CategoryScale);
export default function DoughnutChart() {
    const Data = [
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLost: 823 
        },
        {
          id: 2,
          year: 2017,
          userGain: 45677,
          userLost: 345
        },
        {
          id: 3,
          year: 2018,
          userGain: 78888,
          userLost: 555
        },
        {
          id: 4,
          year: 2019,
          userGain: 90000,
          userLost: 4555
        },
        {
          id: 5,
          year: 2020,
          userGain: 4300,
          userLost: 234
        }
      ];
    const data = {
    labels: ['Delivered', 'Cancelled', 'Pending'],
    datasets: [
      {
        label: 'Orders status',
        data: [70, 5, 25],
        backgroundColor: [
            'rgba(4, 149, 97, 1)',
            'rgba(159, 241, 202, 1)',
            'rgba(175, 41, 11, 1)',
        ],
        borderWidth: 1,
      }
    ]
}

  return (
    <div className="rotate w-[100px] h-[100px]">
        <Doughnut
            data={data}
            options={{
                tooltips:{
                    enabled:false
                },
              plugins: {
                legend: {
                    display: false,
                    position: 'right',
                  },
                title: {
                  display: false,
                  text: ""
                }
              }
            }}
          />
    </div>
  )
}
