import React, { useState, useCallback } from "react";
import { Chart, ArcElement } from "chart.js";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
Chart.register(ArcElement);
import { GoArrowRight } from "react-icons/go";
import { useSelector } from "react-redux";


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`${(percent * 100).toFixed(2)}%`}</text>
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

export default function StatsSection() {
  // Define your data and options for the pie chart
  const data = [
    { name: "Recycling", value: 12, fill: "#36A2EB" },
    { name: "Plantation", value: 27, fill: "#28B463" },
    { name: "Charity/Activity", value: 5, fill: "#ED8325" },
    { name: "Conservation", value: 19, fill: "#2565CF" }
  ];

  const { colors, theme } = useSelector((state) => state.theme);

  // const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="stats-section p-4 rounded-3xl shadow-md" style={{ backgroundColor: colors.card }}>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold" style={{ color: colors.text }}>Stats</h2>
        <div className="more-icon">
          <GoArrowRight style={{ color: colors.text }} className="text-2xl" />
        </div>
      </div>
      <div className="stat-diag flex justify-center items-center">
        <PieChart width={400} height={300}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            theme={theme}
          />
        </PieChart>
      </div>
    </div>
  );
}
