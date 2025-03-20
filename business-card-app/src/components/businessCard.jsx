import React, { useState } from 'react'
import './BusinessCard.css'

function BusinessCard({
  name,
  degrees,
  title,
  field,
  phone,
  email,
  address
}) {
  const [showEmail, setShowEmail] = useState(false)

  return (
    <div className="card">
      <img src="/vamk-logo.jpg" alt="VAMK Logo" className="logo" />
      <h2>{name}</h2>
      <p className="degrees">{degrees}</p>
      <p className="title">{title}</p>
      <p className="field">{field}</p>
      <p className="phone">{phone}</p>
      <p className="address">{address}</p>
      {showEmail && <p className="email">{email}</p>}

      {/* Toggle email on this card only */}
      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? 'Hide Email' : 'Show Email'}
      </button>
    </div>
  )
}

export default BusinessCard
