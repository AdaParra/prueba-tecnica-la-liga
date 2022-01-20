const tokenName = 'token';

export const getAuthenticationToken = (): any => {
    return localStorage.getItem(tokenName);
}
export const setAuthenticationToken = (value: any): void  => {
    localStorage.setItem(tokenName, value);
}
export const removeAuthenticationToken = (): void => {
    localStorage.removeItem(tokenName);
}