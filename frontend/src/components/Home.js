import { useEffect, useState } from 'react'
import AddMovement from './AddMovement'

export default function Home (props) {
    
    const [movements, setMovements] = useState([])

    useEffect(() => {
        fetch(`http://192.168.1.95:5000/movements/${ props.email }`)
        .then(res => res.json())
        .then(res => setMovements(res.reverse()))
    })

    function logout () {
        window.localStorage.setItem('token', '')
        window.location.reload(false)
    }

    return (
        <div className="container my-5 text-center" style={{ color: 'white' }}>
            <h1>I tuoi movimenti</h1>
            Benvenuto { props.email }, questi sono i tuoi movimenti dal più recente<br />
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
                            </p>
                            <p style={{ fontSize: '15px' }}>{ new Date(m.createdAt).toLocaleString() }</p>
                        </div> : 
                        <div className="alert alert-danger my-4">
                            <b style={{ fontSize: '50px' }}>{ m.value }€ 📉</b>
                            <p style={{ fontSize: '20px' }}>{ m.description }
                            { m.category === 'food' ? ' 🥗' : null }
                            { m.category === 'it'   ? ' 🖥️' : null }
                            { m.category === 'school'   ? ' 🏫' : null }
                            </p>
                            <p style={{ fontSize: '15px' }}>{ new Date(m.createdAt).toLocaleString() }</p>
                        </div>
                    )
                })
            }
            <AddMovement email={ props.email }/>
            <button onClick={ logout } className="form-control bg-dark my-5" style={{ color: 'white' }} >Logout</button>
        </div>
    )

}