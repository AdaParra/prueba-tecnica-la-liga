import { User } from "./User";

export interface UsersInformation {
    userList: Array<User>;
    numberOfPages: number;
    totalOfPages: number;
}
