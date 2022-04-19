import React, { useState } from 'react';

export function App() {

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')


  return (
    <div id="app">
      <h2>Fill the form</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => { setName(e.target.value) }} />

      <br />

      <input
        type="text"
        placeholder="Enter your lastname"
        value={lastname}
        onChange={(e) => { setLastname(e.target.value) }} />

      <br />

      <input
        type="email"
        placeholder="Enter your e-mail"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }} />

      <br />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => { setPassword(e.target.value) }} />

      <br />

      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => { setAge(e.target.value) }} />

      <br />

      <h3>Data from form</h3>
      <button onClick={() => { }}>Show Table</button>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>E-mail</th>
            <th>Password</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
