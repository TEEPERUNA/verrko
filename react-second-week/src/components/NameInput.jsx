import React from 'react'

function NameInput({ name, setName }) {
  return (
    <div>
      <label htmlFor="nameField">Enter your name: </label>
      <input
        id="nameField"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default NameInput
