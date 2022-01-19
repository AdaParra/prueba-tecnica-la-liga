import { User } from "./User";

export interface UsersInformation {
    data: Array<User>;
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}
