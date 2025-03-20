import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      id: crypto.randomUUID(), // or any unique ID generator
      description,
      amount: parseFloat(amount)
    };

    onAdd(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Transaction Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (€)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
