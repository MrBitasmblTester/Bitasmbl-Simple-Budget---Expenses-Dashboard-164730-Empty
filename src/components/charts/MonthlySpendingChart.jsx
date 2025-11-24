import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function MonthlySpendingChart() {
  const data = useSelector(s => []); // map state to chart data
  return (
    <BarChart width={400} height={250} data={data}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
}