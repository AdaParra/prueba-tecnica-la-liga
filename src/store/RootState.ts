import { User } from "../types/User";

export interface RootState {
    data: Array<User>;
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}
