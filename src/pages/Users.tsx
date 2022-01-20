import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUsers } from '../api/users';
import * as actions from '../store/actions';
import { Button } from 'components/Button';
import { Card, Cards, CardText, CardTitle } from 'components/Cards';

export default function Users() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.reducerUserList);

    const getUserList = async (page) => {
        const apiUsers = await getUsers(page);
        dispatch(actions.actionUserList(apiUsers));
    }

    const nextPage = () => {
        if (users.totalOfPages >= users.numberOfPages + 1) {
            getUserList(users.numberOfPages + 1);
        }
    }

    const prevPage = () => {
        if (users.numberOfPages - 1 > 0) {
            getUserList(users.numberOfPages - 1);
        }
    }

    const logOut = () => {
        localStorage.removeItem('token');
        dispatch(actions.actionResetUserList());
        navigate('/login');
    }

    useEffect(() => {
        const initialPage = 1;
        getUserList(initialPage);
    }, []);

    return (
        <>
            <Button onClick={logOut}>Cerrar Sesión</Button>
            <Cards>
                {
                    users?.userList?.map((user, index) => (
                        <Card key={index}>
                            <img alt={user.firstName} src={user.avatar} />
                            <CardTitle>{user.firstName}</CardTitle>
                            <CardText>{user.lastName}</CardText>
                            <CardText>{user.email}</CardText>
                        </Card>
                    ))
                }
            </Cards>
            <Button onClick={prevPage}>
                anterior
            </Button>
            <Button onClick={nextPage}>
                siguiente
            </Button>
        </>
    )
}
