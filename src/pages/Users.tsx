import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { removeAuthenticationToken } from "../storage/localStorage";
import {
  CardsContainer,
  CardContent,
  CardText,
  CardTitle,
  CardMedia,
} from "../components/Cards";
import { Button } from "../components/Button";
import { RootState } from "../store";
import * as actions from "../store/actions";
import { getUsers } from "../api/users";

export default function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.reducerUserList);

  const getUserList = async (page) => {
    const apiUsers = await getUsers(page);
    dispatch(actions.actionUserList(apiUsers));
  };

  const nextPage = () => {
    if (users.totalOfPages >= users.numberOfPages + 1) {
      getUserList(users.numberOfPages + 1);
    }
  };

  const prevPage = () => {
    if (users.numberOfPages - 1 > 0) {
      getUserList(users.numberOfPages - 1);
    }
  };

  const logOut = () => {
    removeAuthenticationToken();
    dispatch(actions.actionResetUserList());
    navigate("/login");
  };

  useEffect(() => {
    const initialPage = 1;
    getUserList(initialPage);
  }, []);

  return (
    <>
      <Header>
        <Button onClick={logOut}>Cerrar Sesión</Button>
      </Header>
      <CardsContainer>
        {users?.userList?.map((user) => (
          <CardContent key={user.id}>
            <CardMedia alt={user.firstName} src={user.avatar} />
            <CardTitle>{user.firstName}</CardTitle>
            <CardText>{user.lastName}</CardText>
            <CardText>{user.email}</CardText>
          </CardContent>
        ))}
      </CardsContainer>
      <Footer>
        <Button onClick={prevPage}>Anterior</Button>
        <Button onClick={nextPage}>Siguiente</Button>
      </Footer>
    </>
  );
}
