import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Movement from './components/movement'

// https://colorhunt.co/palette/1b243051557e816797d6d5a8

function App() {
  const [movements, setMovements] = useState([])

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
      {
        movements.map(movement => (
          <Movement movement={ movement } />
        ))
      }
    </div>
  )
}

export default App
