import React, { useState } from 'react';

export const Form = () => {

    const [firstname, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const [showTable, setShowTable] = useState(false)


    return (
        <div id="app">
            <span>Firstname:</span>
            <input
                type="text"
                placeholder="Enter your first name"
                value={firstname}
                onChange={(e) => { setName(e.target.value) }} />

            <br />
            <br />

            <span>Lastname:</span>
            <input
                type="text"
                placeholder="Enter your last name"
                value={lastname}
                onChange={(e) => { setLastname(e.target.value) }} />

            <br />
            <br />

            <span>E-mail:</span>
            <input
                type="email"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }} />

            <br />
            <br />

            <span>Password:</span>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }} />

            <br />
            <br />

            <span>Age:</span>
            <input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => { setAge(e.target.value) }} />

            <br />
            <br />

            <h3>Data from form</h3>

            <button onClick={() => { setShowTable(!showTable) }}>
                {showTable === true ? "Hide Table" : "Show Table"}
            </button>

            <br />
            <br />

            {showTable && <table border="1">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>E-mail</th>
                        <th>Password</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstname}</td>
                        <td>{lastname}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{age}</td>
                    </tr>
                </tbody>
            </table>}

        </div>
    );
}