import { UsersInformation } from '../types/UsersInformation';

export const getUsers = async (numberOfPages: number): Promise<UsersInformation> => {
  const request = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users?page=${numberOfPages}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await request.json();
  return response;
};
