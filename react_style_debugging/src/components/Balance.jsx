import React from 'react';

function Balance({ transactions }) {
  
  const balance = transactions.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const formattedBalance = balance.toFixed(2);

  return (
    <div className="balance">
      <h2>Balance: ${formattedBalance}</h2>
    </div>
  );
}

export default Balance;
