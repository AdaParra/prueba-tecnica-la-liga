import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { InfoText } from 'components/InfoText';
import { getAuthenticationToken } from 'storage/localStorage';
import { loginWith } from '../api/authentication';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showMessageUnauthorized, setshowMessageUnauthorized] = useState(false);

  const handleSubmit = async () => {
    const HttpStatusCodes = await loginWith(email, password);
    if (HttpStatusCodes === 200) {
      navigate('/users');
    } else {
      setshowMessageUnauthorized(true);
    }
  };
  const tokenExists = getAuthenticationToken();
  if (tokenExists) {
    return <Navigate to="/users" />;
  }

  return (
    <Container>
      <Title>
        Proyecto LaLiga
      </Title>
      <Input id="email" autoComplete="off" placeholder="Email" type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
      <Input autoComplete="off" id="password" placeholder="Password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleSubmit}>
        Iniciar Sesión
      </Button>
      {
                showMessageUnauthorized && <InfoText>Usuario o contraseña incorrecta</InfoText>
            }
    </Container>
  );
}
