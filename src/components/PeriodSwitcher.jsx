import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPeriod } from '../store/budgetSlice';

export default function PeriodSwitcher() {
  const period = useSelector(s => s.budget.period);
  const dispatch = useDispatch();
  return (
    <div>
      <button disabled={period==='month'} onClick={()=>dispatch(setPeriod('month'))}>Month</button>
      <button disabled={period==='year'} onClick={()=>dispatch(setPeriod('year'))}>Year</button>
    </div>
  );
}