import React from 'react';

function ResultComponent({ result }) {
  return (
    <div>
      <h2>Result: {result !== null ? result : '-'}</h2>
    </div>
  );
}

export default ResultComponent;
