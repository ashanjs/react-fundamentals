// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({ onSubmitUsername }) {

  const [userName, setUserName] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(userName);
  }

  function handleChange(event) {
    const { value } = event.target;
    setUserName(value.toLowerCase());

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input value={userName} id="username" type="text" onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
