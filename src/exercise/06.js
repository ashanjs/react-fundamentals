// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({ onSubmitUsername }) {

  const inputRef = React.useRef(null);
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value);
  }

  function handleChange(event) {
    const inputValue = event.target.value;
    const isValid = inputValue === inputValue.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={inputRef} id="username" type="text" onChange={handleChange} />
      </div>
      <div style={{ color: "Red" }} role="alert"> {error}</div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
