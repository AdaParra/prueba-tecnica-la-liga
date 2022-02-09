import { UsersInformation } from "../../types/UsersInformation";

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
        userList: data,
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
