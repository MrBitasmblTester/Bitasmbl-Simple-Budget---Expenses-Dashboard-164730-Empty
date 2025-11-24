import React from 'react';
import { useSelector } from 'react-redux';

export default function SummaryPanel() {
  const { entries, period } = useSelector(s => s.budget);
  const total = entries.reduce((sum, e) => sum + (e.type==='expense'?-e.amount:e.amount),0);
  return (
    <section>
      <h3>Summary ({period})</h3>
      <p>Net: {total}</p>
    </section>
  );
}