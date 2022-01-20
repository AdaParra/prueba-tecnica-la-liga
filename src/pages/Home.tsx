import { Card, Cards } from 'components/Cards';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Cards>
            <Card>
                <Link to="/login">Iniciar Sesión</Link>
            </Card>
            <Card>
                <Link to="/users">Usuarios</Link>
            </Card>
        </Cards>
    )
}
