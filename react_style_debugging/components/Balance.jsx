import React from 'react';

function Balance({ transactions }) {

  const balance = transactions.reduce((acc, curr) => acc + curr.amount);
  
  return (
    <div className="balance">
      <h2>Balance: ${balance}</h2>
    </div>
  );
}

export default Balance;
