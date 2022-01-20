export const getLocalStorageItem = (key: string): any => {
    return localStorage.getItem(key);
}
export const setLocalStorageItem = (key: string, value: any): void  => {
    localStorage.setItem(key, value);
}
export const removeLocalStorageItem = (key: string): void => {
    localStorage.removeItem(key)
}