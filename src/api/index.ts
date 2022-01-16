export const loginWith = async function(email: string, password: string) {
    const responseApi = await fetch(`https://reqres.in/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });
    return responseApi;
}
