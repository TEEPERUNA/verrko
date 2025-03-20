import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    if (text === "" || amount === "") {
      alert("Please enter both text and amount.");
      return;
    }


    const transaction = {
      id: Math.random(),
      text: text,
      amount: parseFloat(amount),
    };


    onAdd(transaction);


    setText("");
    setAmount("");
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div>
        <label>Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter transaction description"
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter transaction amount"
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
