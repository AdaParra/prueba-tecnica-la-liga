import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { loginWith } from '../api/index';
import { Button } from 'components/Button';
import { Input, Label } from 'components/Input';
import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { InfoText } from 'components/InfoText';

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
        return <Navigate to='/users' />
    }

    return (
        <Container>
            <Title>
                Proyecto LaLiga
            </Title>
            <Label htmlFor='email'>Email: </Label>
            <Input id='email' autoComplete='off' placeholder='Email' type='text' name='email' onChange={ e => setEmail(e.target.value) } />
            <Label htmlFor='password'>Contraseña: </Label>
            <Input autoComplete='off' id='password' placeholder='Password' type='password' name='password' onChange={e => setPassword(e.target.value) } />
            <Button onClick={handleSubmit}>
                Iniciar Sesión
            </Button>
            {
                showMessageUnauthorized && <InfoText>Usuario o contraseña incorrecta</InfoText>
            }
        </Container>
    )
}
