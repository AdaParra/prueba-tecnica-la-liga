import { User } from "../../types/User";
import { UsersInformation } from "../../types/UsersInformation";

const convertDataToUser = (data) => {
  const users = data.map((userElement) => {
    const user: User = {
      avatar: userElement.avatar,
      email: userElement.email,
      firstName: userElement.first_name,
      lastName: userElement.last_name,
      id: userElement.id,
    };
    return user;
  });
  return users;
};

const initialState: UsersInformation = {
  userList: [],
  numberOfPages: 0,
  totalOfPages: 0,
};

export const reducerUserList = (
  state: UsersInformation = initialState,
  action
) => {
  switch (action.type) {
    case "USER_INFORMATION": {
      const { data, page, total_pages } = action.payload;
      return {
        ...state,
        userList: convertDataToUser(data),
        numberOfPages: page,
        totalOfPages: total_pages,
      };
    }
    case "RESET_USER_INFORMATION": {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
