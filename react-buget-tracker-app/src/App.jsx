import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Calculate total balance
  const totalBalance = transactions.reduce((acc, curr) => acc + Number(curr.amount), 0);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const removeTransaction = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      <h2>Saldo: {totalBalance.toFixed(2)} €</h2>
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onRemove={removeTransaction} />
    </div>
  );
}

export default App;
