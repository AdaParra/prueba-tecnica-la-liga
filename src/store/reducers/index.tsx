interface User {
    avatar: string,
    email: string,
    first_name: string
    id: number,
    last_name: string
}

export interface UserList {
    data: Array<User>,
    page: number,
    per_page: number,
    total: number,
    total_pages: number
};

const initialState: UserList = {
    data: [],
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0
};

export const reducerUserList = (state: UserList = initialState, action) => {
    switch (action.type) {
    case 'USER_LIST': {
        const { data, page, per_page, total, total_pages } = action.payload;
        return {
            ...state,
            data,
            page,
            per_page,
            total,
            total_pages
        }
    }
    default:
        return state;
    }
}