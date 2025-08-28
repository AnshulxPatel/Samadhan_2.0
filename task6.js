import React from 'react';

function ProfileCard({ name, role, avatar }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '250px', textAlign: 'center' }}>
      <img src={avatar} alt={`${name}'s avatar`} style={{ width: '80px', borderRadius: '50%' }} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;
