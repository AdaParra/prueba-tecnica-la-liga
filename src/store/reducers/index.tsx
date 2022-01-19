import { UsersInformation } from "../../types/UsersInformation";

const initialState: UsersInformation = {
    data: [],
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0
};

export const reducerUserList = (state: UsersInformation = initialState, action) => {
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
    case 'RESET_USER_LIST' : {
        return {
            ...initialState
        }
    }
    default:
        return state;
    }
}