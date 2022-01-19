import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { loginWith } from '../api/index';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showMessageUnauthorized, setshowMessageUnauthorized] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const HttpStatusCodes = await loginWith(email, password);
        if (HttpStatusCodes === 200) {
            navigate('/users');
        } else {
            setshowMessageUnauthorized(true);
        }
    }

    if (localStorage.getItem('token')) {
        return <Navigate to="/users" />
    }

    return (
        <form onSubmit={handleSubmit}>
            <input autoComplete="off" type="text" name="email" onChange={ e => setEmail(e.target.value) } />
            <input autoComplete="off" type="password" name="password" onChange={e => setPassword(e.target.value) } />
            <button type="submit">
                Iniciar Sesión
            </button>
            {
                showMessageUnauthorized && <p>Usuario o contraseña incorrecta</p>
            }
        </form>
    )
}
