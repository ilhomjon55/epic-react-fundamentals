// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const [userName, setUserName] = React.useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    onSubmitUsername(userName)
  }

  function handleSubmit(evt) {
    const {value} = evt.target
    setUserName(value.toLowerCase())
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="input_name">Username:</label>
        <input
          type="text"
          id="input_name"
          onChange={handleSubmit}
          value={userName}
        />
      </div>

      <button type="submit">Submit</button>
      <div style={{color: 'red'}} role="alert"></div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
