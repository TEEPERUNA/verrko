import React from 'react';

const Weekdays = () => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayIndex = new Date().getDay();
  
  // Reorder weekdays so that today is the first element
  const orderedWeekdays = [...weekdays.slice(todayIndex), ...weekdays.slice(0, todayIndex)];

  return (
    <ul>
      {orderedWeekdays.map((day, index) => (
        <li key={index}>{day}</li>
      ))}
    </ul>
  );
};

export default Weekdays;
