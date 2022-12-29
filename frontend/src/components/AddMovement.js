import axios from 'axios'
import { useState } from 'react'

export default function AddMovement (props) {

    const [value, setValue] = useState(0)
    const [category] = useState('')
    const [description, setDescription] = useState('')

    function addMovement () {
        if (value !== 0 && category !== '' && description !== '') {
            axios.post('http://192.168.1.95:5000/movements', {
                email: props.email,
                value: value,
                category: category,
                description: description
            })
        } else {
            alert('Inserisci tutti i campi per salvare il movimento')
        }
    }

    return (
        <div className="text-center">
            <h4>Inserisci un nuovo movimento </h4>
            <form onSubmit={ addMovement }>
                <input value={ props.email } placeholder="Email" className="form-control my-1 bg-dark" readOnly style={{ color: 'white' }} />
                <input placeholder="Valore" onChange={(e) => setValue(e.target.value) } className="form-control bg-dark my-1" style={{ color: 'white' }} type="number" />
                <select className="form-control bg-dark" style={{ color: 'white' }} placeholder="Categoria">  
                    <option value="" disabled selected hidden>Categoria</option>    
                    {
                        props.categories.map(c => {
                            return (
                                <option value={ c }>{ c }</option>
                            )
                        })
                    }  
                </select>
                <input placeholder="Descrizione" onChange={(e) => setDescription(e.target.value) } className="form-control bg-dark my-1" style={{ color: 'white' }} />
                <input type="submit" className="form-control my-2 bg-dark" style={{ color: 'white' }} />
            </form>
        </div>
    )

}