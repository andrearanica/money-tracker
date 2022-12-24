import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Movement from './components/Movement'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

// https://colorhunt.co/palette/1b243051557e816797d6d5a8

function App() {
  const [movements, setMovements] = useState([])
  const [token, setToken] = useState('')

  useEffect(() => {
    document.body.style.backgroundColor = '#1B2430';
    fetch("http://localhost:5000/movements")
    .then(res => res.json())
    .then(result => {
      setMovements(result) 
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Login token={ token } />
      <Dashboard token={ token } movements={ movements } />
    </div>
  )
}

export default App
