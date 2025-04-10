'use client'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJs } from "chart.js/auto"
import { CategoryScale } from "chart.js";

ChartJs.register(CategoryScale);
export default function BarChart() {
  const data = {
    labels: Array(30).fill(1).map((x,i)=> i + 1),
    datasets: [
      {
        label: 'Orders status',
        data: Array(30).fill(1).map((x,i)=> i + 40),
        backgroundColor: [
            '#52A9EA'
        ],
        borderWidth: 1,
        borderRadius: 12.5,
        order:1
      },
      {
      //   label: 'Orders status',
        data: Array(30).fill(1).map((x,i)=> i - 40),
        backgroundColor: [
          'rgba(79, 79, 79, 1)'
            
        ],
        borderWidth: 1,
        borderRadius: 12.5,
        order:2
      }
    ]
  }

  return (
    <div className="w-full h-full">
        <Bar
            data={data}
            options={{
                scales:{
                    y:{
                        beginAtZero: false,
                        min: -40,
                        stacked: true,
                        // ticks:{
                        //     stepSize: 10
                        // }
                    },
                    x:{
                        stacked: true
                    }
                },
                // layout:{
                //     padding:{
                //         bottom:20
                //     }
                // },
                maintainAspectRatio: false,
                tooltips:{
                    enabled:false
                },
                responsive: true,
              plugins: {
                legend: {
                    display: false,
                    position: 'right',
                  },
                title: {
                  display: false,
                //   text: ""
                }
              }
            }}
          />
    </div>
  )
}
