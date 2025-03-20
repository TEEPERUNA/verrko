import { useState } from 'react'
import BusinessCard from './components/businessCard'
import './App.css'

function App() {
  // Controls the search input
  const [searchTerm, setSearchTerm] = useState('')

  // Example data for your three business cards
  const data = [
    {
      id: 1,
      name: 'John Doe',
      degrees: 'M.Sc, M.Eng, B.Sc',
      title: 'Product Manager / Professional Teacher',
      field: 'Information Technology',
      phone: '+358 50 2345678',
      email: 'john.doe@vamk.fi',
      address: 'Wolffintie 30, FI-65200 VAASA, Finland'
    },
    {
      id: 2,
      name: 'Jane Smith',
      degrees: 'Dr, M.Sc, Eng',
      title: 'CEO / Technical Director',
      field: 'Information Technology',
      phone: '+358 50 3456789',
      email: 'jane.smith@vamk.fi',
      address: 'Wolffintie 30, FI-65200 VAASA, Finland'
    }
  ]

  // Filter data by name, title, or field
  const filteredData = data.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase()
    return (
      item.name.toLowerCase().includes(lowerSearch) ||
      item.title.toLowerCase().includes(lowerSearch) ||
      item.field.toLowerCase().includes(lowerSearch)
    )
  })

  return (
    <div className="app-container">
      <h1>VAMK Business Cards</h1>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, title, or field..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display filtered cards */}
      <div className="cards-grid">
        {filteredData.map((person) => (
          <BusinessCard
            key={person.id}
            name={person.name}
            degrees={person.degrees}
            title={person.title}
            field={person.field}
            phone={person.phone}
            email={person.email}
            address={person.address}
          />
        ))}
      </div>
    </div>
  )
}

export default App
