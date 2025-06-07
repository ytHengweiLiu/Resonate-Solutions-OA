import { React, useEffect, useState } from 'react';
import { Details } from '../components/Index'
import './Contacts.css'

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setContacts(json.sort((a, b) => a.name.localeCompare(b.name)));
      });
  }, []);

  if (selected) {
    return (
      <Details user={selected} onBack={() => setSelected(null)} />
    );
  }

  return (
    <div className="Body">
      <h1>Contacts</h1>
      <div className="contacts-grid">
        {contacts.map(user => (
          <div className="card" onClick={() => setSelected(user)}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts