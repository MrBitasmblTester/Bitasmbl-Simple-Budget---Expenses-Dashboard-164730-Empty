import React from 'react';
import MonthlySpendingChart from '../charts/MonthlySpendingChart';
import IncomeExpenseTrendChart from '../charts/IncomeExpenseTrendChart';

export default function ChartsPanel() {
  return (
    <section>
      <h3>Visual Insights</h3>
      <MonthlySpendingChart />
      <IncomeExpenseTrendChart />
    </section>
  );
}