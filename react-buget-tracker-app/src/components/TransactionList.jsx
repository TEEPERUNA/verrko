import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onRemove }) {
  if (transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  return (
    <ul>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TransactionList;
