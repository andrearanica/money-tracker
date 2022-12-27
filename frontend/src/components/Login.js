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
        axios.post('http://192.168.1.95:5000/auth/login', { email: email, password: password })
        .then(res => {
            props.setToken(res.data)
            props.setEmail(email)
            window.location.reload(false);
        })
        .catch(error => console.log(error))
    }

    async function signup (event) {
        event.preventDefault()
        axios.post('http://192.168.1.95:5000/auth/register', { email: email, password: password })
    }

    return (
        <div className="container my-5 text-center">
            <h1 style={{ color: 'white' }}>Login</h1>
            <input  value={ email }    className="form-control bg-dark text-light my-3" type="email"    onChange={ event => setEmail(event.target.value) }    placeholder="Email" />
            <input  value={ password } className="form-control bg-dark text-light my-3" type="password" onChange={ event => setPassword(event.target.value) } placeholder="Password" />
            <button onClick={ login }  className="form-control bg-dark my-2" style={{ color: 'white' }}>Login</button>
            <button onClick={ signup } className="form-control bg-dark my-2" style={{ color: 'white' }}>Registrazione</button>
        </div>
        
    )
}