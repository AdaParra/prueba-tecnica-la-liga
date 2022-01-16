import React, { useState } from 'react';
import authentication from '../api/index';

export default function Login() {

    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await authentication(email, password);
        if(response?.ok){
            const { token } = await response.json();
            console.log(token);
        }
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
