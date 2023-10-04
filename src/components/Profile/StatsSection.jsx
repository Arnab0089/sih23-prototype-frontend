import React from "react";
import { Chart, ArcElement } from "chart.js";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
Chart.register(ArcElement);
import { GoArrowRight } from "react-icons/go";


export default function StatsSection() {
    // Define your data and options for the pie chart
    const data = [
        { name: "Goal 1", value: 30 },
        { name: "Goal 2", value: 40 },
        { name: "Goal 3", value: 30 },
    ];

    const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

    return (
        <div className="stats-section bg-gray-400 p-4 rounded-3xl shadow-md">
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Stats</h2>
                <div className="more-icon">
                    <GoArrowRight className="text-2xl" />
                </div>
            </div>
            <div className="stat-diag">
                <PieChart width={300} height={300}>
                    <Pie
                        dataKey="value"
                        data={data}
                        cx={150}
                        cy={150}
                        innerRadius={60}
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </div>
    );

}
