import { React, useEffect, useState } from 'react';
import { Details } from '../components/Index'
import './Contacts.css'

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [sortOption, setSortOption] = useState('name');

  const filteredContacts = contacts
    .filter(user =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.id - b.id;
      }
      // more sort options
    });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setContacts(json))
  }, []);

  if (selected) {
    return (
      <Details user={selected} onBack={() => setSelected(null)} />
    );
  }

  return (
    <div className="Body">
      <h1>Contacts</h1>
      <div className="nav-bar">
        <input
          type="text"
          placeholder="Find by name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="name">Sort by Name (A–Z)</option>
          <option value="id">Sort by ID</option>
        </select>
      </div>
      <div className="contacts-grid">
        {filteredContacts.length > 0 ? (
          filteredContacts.map(user => (
            <div className="card" onClick={() => setSelected(user)}>
              <h2>{user.name}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No results found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacts