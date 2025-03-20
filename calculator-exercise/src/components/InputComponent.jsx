import React from 'react';

function InputComponent({ label, value, onChange }) {
  return (
    <div>
      <label>
        {label}:
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ marginLeft: '1rem' }}
        />
      </label>
    </div>
  );
}

export default InputComponent;
