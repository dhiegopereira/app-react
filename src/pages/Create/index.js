import { useState } from 'react';
import { createUser } from '../../utils/Database';

export default function Create() {

    const [form, setForm] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setForm(old => {
            return {
                ...old,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        createUser(form);
    }
    
    return (
        <>
            <h1>Cadastrar</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nome" onChange={handleChange} required />
                <input type="text" name="email" placeholder="Email" onChange={handleChange} required />
                <button>Cadastrar</button>

            </form>
        </>
    )
}