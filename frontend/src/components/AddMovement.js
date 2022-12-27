import axios from 'axios'
import { useState } from 'react'

export default function AddMovement (props) {

    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    function addMovement () {
        axios.post('http://localhost:5000/movements', {
            email: props.email,
            value: value,
            category: category,
            description: description
        })
    }

    return (
        <div className="text-center">
            <h4>Inserisci un nuovo movimento </h4>
            <form onSubmit={ addMovement }>
                <input placeholder="Email" value={ props.email } className="form-control my-1 bg-dark" readonly style={{ color: 'white' }} />
                <input placeholder="Valore"      onChange={(e) => setValue(e.target.value) }       className="form-control bg-dark my-1" style={{ color: 'white' }} type="number" />
                <input placeholder="Categoria"   onChange={(e) => setCategory(e.target.value) }    className="form-control bg-dark my-1" style={{ color: 'white' }} />
                <input placeholder="Descrizione" onChange={(e) => setDescription(e.target.value) } className="form-control bg-dark my-1" style={{ color: 'white' }} />
                <input type="submit" className="form-control my-2 bg-dark" style={{ color: 'white' }} />
            </form>
        </div>
    )

}