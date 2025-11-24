import React from 'react';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="app">
      <header>Simple Budget & Expenses Dashboard</header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}