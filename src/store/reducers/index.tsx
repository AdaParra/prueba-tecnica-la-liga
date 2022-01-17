const initialState = {
    userList: [],
};

export const userList = (state = initialState, action) => {
    switch (action.type) {
    case 'USER_LIST': {
        const userList = action.payload;
        return {
            ...state,
            userList
        }
    }
    default:
        return state;
    }
}