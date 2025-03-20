import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    const transaction = {
      id: Math.random(),
      text: text,
      amount: parseFloat(amount), // Ensure amount is treated as a number
    };
    onAdd(transaction);
    setText(""); // Reset text field after submission
    setAmount(""); // Reset amount field after submission
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div>
        <label>Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
