import React from 'react'

function Weekdays() {

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const todayIndex = new Date().getDay() 

  const correctedIndex = (todayIndex === 0) ? 6 : todayIndex - 1
  

  const reordered = [
    ...correctedWeekdays.slice(correctedIndex),
    ...correctedWeekdays.slice(0, correctedIndex)
  ]

  return (
    <div>
      <h2>Weekdays Starting From Today</h2>
      <ul>
        {reordered.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>
    </div>
  )
}

export default Weekdays
