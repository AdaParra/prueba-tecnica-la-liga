import { User } from "../types/User";
import { UserInformationFromApi } from "../types/UsersInformation";

export const convertDataToUser = (data) => {
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

export const getUsers = async (
  numberOfPages: number
): Promise<UserInformationFromApi> => {
  try {
    const request = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/users?page=${numberOfPages}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await request.json();
    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
  return {
    data: [],
    page: 0,
    total_pages: 0,
  };
};
