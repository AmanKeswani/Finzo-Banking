"use client";

import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [6789, 4590, 9876],
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
                hoverBackgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
            },
        ],
        labels: ["Bank 1", "Bank 2", "Bank 3"],
    };
    return (
        <Doughnut
            data={data}
            options={{
                cutout: "70%",
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            }}
        />
    );
};

export default DoughnutChart;
