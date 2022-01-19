import { UsersInformation } from "types/UsersInformation";

export const getUsers = async function (numberOfPages: number): Promise<UsersInformation> {
  const response = await fetch(`https://reqres.in/api/users?page=${numberOfPages}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return await response.json();
}
