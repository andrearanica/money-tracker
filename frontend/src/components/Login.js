import React, { useState } from 'react'

export default function Login (props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if (props.email) {
        return null
    }

    function login (event) {
        fetch('http://localhost:5000/login', {
            body: JSON.stringify({ email: email, password: password })
        })
        event.preventDefault()
    }

    return (
        <div className="container my-5 text-center">
            <h1 style={{ color: 'white' }}>Login</h1>
            <input  className="form-control bg-dark text-light my-3" type="email"    onChange={ event => setEmail(event.target.value) }    placeholder="Email" />
            <input  className="form-control bg-dark text-light my-3" type="password" onChange={ event => setPassword(event.target.value) } placeholder="Password" />
            <button className="form-control bg-dark text-light my-3" onClick={ login }>Invia</button>
        </div>
    )
}