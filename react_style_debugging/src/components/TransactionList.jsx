import React from 'react';

function TransactionList({ transactions = [], onRemove }) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <ul>
        {Array.isArray(transactions) ? transactions.map((transaction) => (
          <li key={transaction.id} onClick={() => onRemove(transaction.id)}>
            {transaction.text} - ${transaction.amount}
          </li>
        )) : <p>No transactions available</p>}
      </ul>
    </div>
  );
}

export default TransactionList;
