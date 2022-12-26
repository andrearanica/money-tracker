import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Login from './components/Login'
import Home from './components/Home'

// https://colorhunt.co/palette/1b243051557e816797d6d5a8

function App() {
  const [movements, setMovements] = useState([])
  const [token, setToken] = useState('')

  useEffect(() => {
    document.body.style.backgroundColor = '#1B2430';
    fetch("http://localhost:5000/movements/")
    .then(res => res.json())
    .then(result => {
      setMovements(result) 
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      {
        token ? <Home movements={ movements } setMovements={ setMovements } /> : <Login token={ token } setToken={ setToken } />
      }
    </div>
  )
}

export default App
