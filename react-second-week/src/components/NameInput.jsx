import React from 'react';

const NameInput = ({ name, setName }) => {
  return (
    <input 
      type="text" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Type your name" 
    />
  );
};

export default NameInput;
