import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function IncomeExpenseTrendChart() {
  const data = useSelector(s => []);
  return (
    <LineChart width={400} height={250} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="income" stroke="#82ca9d" />
      <Line type="monotone" dataKey="expense" stroke="#8884d8" />
    </LineChart>
  );
}