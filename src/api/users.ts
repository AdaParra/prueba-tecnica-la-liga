import { UsersInformation } from 'types/UsersInformation';

export const getUsers = async function (numberOfPages: number): Promise<UsersInformation> {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users?page=${numberOfPages}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};
