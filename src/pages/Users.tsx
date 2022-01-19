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
    const dataUsers = useSelector((state: RootState) => state.reducerUserList);

    const getUserList = async (page) => {
        const apiUsers = await getUsers(page);
        dispatch(actions.actionUserList(apiUsers));
    }

    const nextPage = () => {
        if (dataUsers.total_pages >= dataUsers.page + 1) {
            getUserList(dataUsers.page + 1);
        }
    }

    const prevPage = () => {
        if (dataUsers.page - 1 > 0) {
            getUserList(dataUsers.page - 1);
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
                    dataUsers?.data?.map((user, index) => (
                        <Card key={index}>
                            <img alt={user.first_name} src={user.avatar} />
                            <CardTitle>{user.first_name}</CardTitle>
                            <CardText>{user.last_name}</CardText>
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
