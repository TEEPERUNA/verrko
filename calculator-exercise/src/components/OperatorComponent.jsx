import React from 'react';

function OperatorComponent({ operator, onOperatorChange }) {
  const handleChange = (e) => {
    onOperatorChange(e.target.value);
  };

  return (
    <div>
      <label>
        Operator:
        <select
          value={operator}
          onChange={handleChange}
          style={{ marginLeft: '1rem' }}
        >
          <option value="">Select</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
    </div>
  );
}

export default OperatorComponent;
