import { setLocalStorageItem } from "storage/localStorage";

export const loginWith = async function (email: string, password: string): Promise<number> {
  const response = await fetch(`https://reqres.in/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  if (response?.ok) {
    const { token } = await response.json();
    setLocalStorageItem('token', JSON.stringify(token));
  }
  return response.status;
};
