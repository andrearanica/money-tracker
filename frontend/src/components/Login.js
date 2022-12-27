import React, { useState } from 'react'
import axios from 'axios'

export default function Login (props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if (props.token) {
        return null
    }

    async function login (event) {
        event.preventDefault()
        axios.post('http://localhost:5000/auth/login', { email: email, password: password })
        .then(res => {
            props.setToken(res.data)
            props.setEmail(email)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="container my-5 text-center">
            <h1 style={{ color: 'white' }}>Login</h1>
            <form onSubmit={ login }>
                <input  value={ email }    className="form-control bg-dark text-light my-3" type="email"    onChange={ event => setEmail(event.target.value) }    placeholder="Email" />
                <input  value={ password } className="form-control bg-dark text-light my-3" type="password" onChange={ event => setPassword(event.target.value) } placeholder="Password" />
                <input type="submit" />
            </form>
        </div>
    )
}