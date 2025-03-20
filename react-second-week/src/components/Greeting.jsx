import React from 'react';

const Greeting = ({ name }) => {
  return <h1>Hello, {name ? name : 'Guest'}!</h1>;
};

export default Greeting;
