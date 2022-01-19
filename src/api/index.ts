export const loginWith = async function(email: string, password: string): Promise<number> {
    const response = await fetch(`https://reqres.in/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });
    if(response?.ok){
        const { token } = await response.json();
        localStorage.setItem('token', JSON.stringify(token));
    }
    return response.status;
}

export const getUsers = async function (page: number) {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const userList = await response.json();
    return userList;
}
