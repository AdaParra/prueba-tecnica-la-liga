import { User } from './User';

export interface UserInformationFromApi {
    data: Array<User>,
    page: number,
    total_pages: number,
}

export interface UsersInformation {
    userList: Array<User>;
    numberOfPages: number;
    totalOfPages: number;
}
