import React from 'react';
import Button from 'react-bootstrap/Button';
import './Details.css'

const Details = ({ user, onBack }) => {
  return (
    <div className="Body">
      <Button variant="secondary" onClick={onBack}>Back</Button>
      <div className="detail-card">
        <h2>{user.name}</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>User Name:</strong> {user.username}</p>
        <p>
          <strong>Email:</strong>
          <Button variant="link" onClick={() => window.open(`mailto:${user.email}`)} >{user.email}</Button>
        </p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p>
          <strong>Website:</strong>
          <Button variant="link" onClick={() => window.open(`https://${user.website}`, '_blank')}>{user.website}</Button>
        </p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Catchphrase:</strong> {user.company.catchPhrase.split(" ").join(", ")}</p>
        <p><strong>Business Slogan:</strong> {user.company.bs.split(" ").join(", ")}</p>
        <p>
          <strong>Address:</strong>
          <Button variant="link"  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`, '_blank')}>
            {`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
          </Button>
        </p>
        <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
        <p><strong>Longitude:</strong> {user.address.geo.lng}</p>
      </div>
    </div>
  );
}

export default Details