import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'

// https://colorhunt.co/palette/1b243051557e816797d6d5a8

function App() {
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', token)
      window.localStorage.setItem('email', email)
    }
    setEmail(window.localStorage.getItem('email'))
    document.body.style.backgroundColor = "#1B2430"
  })

  return (
    <div className="App">
      <Navbar />
      {
        window.localStorage.getItem('token') ? <Home email={ email } /> : <Login token={ token } setToken={ setToken } setEmail={ setEmail }/>
      }
    </div>
  )
}

export default App
