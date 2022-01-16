import React, { useState } from 'react';
import { loginWith } from '../api/index';

export default function Login() {

    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginWith(email, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input autoComplete="off" type="text" name="email" onChange={() => {} /* e => setEmail(e.target.value) */} />
            <input autoComplete="off" type="password" name="password" onChange={() => {} /*e => setPassword(e.target.value)*/} />
            <button type="submit">
                Iniciar Sesión
            </button>
        </form>
    )
}
