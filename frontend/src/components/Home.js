import axios from 'axios'
import { useEffect, useState } from 'react'
import AddMovement from './AddMovement'

export default function Home (props) {
    
    const [movements, setMovements] = useState([])
    const [categories] = useState(['it', 'food', 'salary'])

    useEffect(() => {
        fetch(`http://192.168.1.95:5000/movements/${ props.email }`)
        .then(res => res.json())
        .then(res => setMovements(res.reverse()))
    })

    function logout () {
        window.localStorage.setItem('token', '')
        window.location.reload(false)
    }

    function deleteMovement (id) {
        axios.delete(`http://192.168.1.95:5000/movements/${ id }`)
    }

    return (
        <div className="container my-5 text-center" style={{ color: 'white' }}>
            <h1>I tuoi movimenti</h1>
            <h4>Totale: {  }</h4>
            {
                movements.map(m => {
                    return (
                        m.value > 0 ? 
                        <div className="alert alert-success my-4">
                            <b style={{ fontSize: '50px' }}>+{ m.value }€ 📈</b>
                            <p style={{ fontSize: '20px' }}>{ m.description }
                            { m.category === 'food'     ? ' 🥗' : null }
                            { m.category === 'it'       ? ' 🖥️' : null }
                            { m.category === 'school'   ? ' 🏫' : null }
                            { m.category === 'work'     ? ' 💼' : null }
                            </p>
                            <p style={{ fontSize: '15px' }}>{ new Date(m.createdAt).toLocaleString() }</p>
                            <button onClick={ () => deleteMovement(m._id) } className="btn btn-danger">Cancella</button>
                        </div> : 
                        <div className="alert alert-danger my-4">
                            <b style={{ fontSize: '50px' }}>{ m.value }€ 📉</b>
                            <p style={{ fontSize: '20px' }}>{ m.description }
                            { m.category === 'food'     ? ' 🥗' : null }
                            { m.category === 'it'       ? ' 🖥️' : null }
                            { m.category === 'school'   ? ' 🏫' : null }
                            { m.category === 'work'     ? ' 💼' : null }
                            </p>
                            <p style={{ fontSize: '15px' }}>{ new Date(m.createdAt).toLocaleString() }</p>
                            <button onClick={ () => deleteMovement(m._id) } className="btn btn-danger">Cancella</button>
                        </div>
                    )
                })
            }
            <AddMovement email={ props.email } categories={ categories }/>
            <button onClick={ logout } className="form-control bg-dark my-5" style={{ color: 'white' }} >Logout</button>
        </div>
    )

}