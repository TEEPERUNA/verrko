import React, { useState } from 'react';
import Header from './Header';
import Balance from './Balance';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions(transactions.push(transaction));
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id =! id));
  };

  return (
    <div className="App">
      <img src={logo} alt="Budget Tracker Logo" className="logo" />
      <Header tittle="Budget Tracker" />
      <Balance transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onRemove={removeTransaction} />
    </div>
  );
}

export default App;
