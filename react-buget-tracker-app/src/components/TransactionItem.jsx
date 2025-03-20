import React from 'react';

function TransactionItem({ transaction, onRemove }) {
  const { id, description, amount } = transaction;

  return (
    <li style={{ marginBottom: '0.5rem' }}>
      <strong>{description}</strong> – {amount.toFixed(2)} €
      <button
        style={{ marginLeft: '1rem', backgroundColor: 'red' }}
        onClick={() => onRemove(id)}
      >
        X
      </button>
    </li>
  );
}

export default TransactionItem;
