import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUsers } from '../api/index';
import * as actions from '../store/actions';

export default function Users() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.reducerUserList);

    const getUserList = async (page) => {
        const userList = await getUsers(page);
        dispatch(actions.actionUserList(userList));
    }

    const nextPage = () => {
        if (users.total_pages >= users.page + 1) {
            getUserList(users.page + 1);
        }
    }

    const prevPage = () => {
        if (users.page - 1 > 0) {
            getUserList(users.page - 1);
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('token');
        navigate('/login');
    }

    useEffect(() => {
        const initialPage = 1;
        getUserList(initialPage);
    }, []);

    return (
        <>
            <button onClick={logOut}>Cerrar Sesión</button>
            <table>
                <tbody>
                    <tr>
                        <td>Avatar</td>
                        <td>Firt Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                    </tr>
                    {
                        users?.data?.map((user, index) => (
                            <tr key={index}>
                                <td><img alt={user.first_name} src={user.avatar} /></td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            <button onClick={prevPage}>
                anterior
            </button>
            <button onClick={nextPage}>
                siguiente
            </button>
        </>
    )
}
