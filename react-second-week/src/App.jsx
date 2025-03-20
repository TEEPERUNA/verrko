import React, { useState } from 'react';
import NameInput from './components/NameInput';
import Greeting from './components/Greeting';
import Weekdays from './components/Weekdays';

function App() {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <NameInput name={name} setName={setName} />
      <Greeting name={name} />
      <Weekdays />
    </div>
  );
}

export default App;
