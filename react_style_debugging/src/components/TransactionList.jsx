import React from 'react';

function TransactionList({ transactions, onRemove }) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} onClick={() => onRemove(transaction.id)}>
            {transaction.text} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
