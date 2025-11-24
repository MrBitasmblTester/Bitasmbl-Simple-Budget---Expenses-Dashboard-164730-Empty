import React from 'react';
import EntryForm from '../EntryForm';
import EntryList from '../EntryList';

export default function BudgetPanel() {
  return (
    <section>
      <h3>Entries</h3>
      <EntryForm />
      <EntryList />
    </section>
  );
}