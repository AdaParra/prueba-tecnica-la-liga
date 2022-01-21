import { setAuthenticationToken } from "../storage/localStorage";

export const loginWith = async (
  email: string,
  password: string
): Promise<number> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    if (response?.ok) {
      const { token } = await response.json();
      setAuthenticationToken(JSON.stringify(token));
    }
    return response.status;
  } catch (error) {
    console.error("Error: ", error);
    return 500;
  }
};
