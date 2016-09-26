import React from 'react'

const Name = ({ name, onChange }) => (
  <div>
    <p>Hi {name}!</p>
    Change your name: <input type="text" value={name} onChange={e => onChange(e.target.value)} />
  </div>
)

export default Name
