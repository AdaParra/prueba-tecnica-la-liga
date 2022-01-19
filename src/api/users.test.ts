import { User } from "types/User"
import { UsersInformation } from "types/UsersInformation"
import { getUsers } from "./users"

describe("users.ts", () => {
    test("get users correctly", async () => {
        const users: Array<User> = [{
            avatar: "anyAvatar",
            email: "any@email.com",
            first_name: "anyFirstName",
            id: 4,
            last_name: "anyLastName"
        },
        {
            avatar: "anyOtherAvatar",
            email: "anyOther@email.com",
            first_name: "anyOtherFirstName",
            id: 7,
            last_name: "anyOtherLastName"
        }]
        const usersInfo: UsersInformation = {
            data: users,
            page: 2,
            per_page: 1,
            total: 20,
            total_pages: 40
        }
         mockFetchApiWith(usersInfo)

        const numberOfPages = 6
        const returnedResult = await getUsers(numberOfPages)

        expect(global.fetch).toHaveBeenCalledWith(
            `https://reqres.in/api/users?page=${numberOfPages}`,
            {"headers": {"Content-Type": "application/json"}, "method": "GET"}
        )
        expect(returnedResult).toEqual(usersInfo)
    })
})

function mockFetchApiWith(usersInfo: UsersInformation): void {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(usersInfo),
        headers: new Headers(),
        ok: false,
        redirected: false,
        status: 0,
        statusText: "",
        type: "basic",
        url: "",
        clone: function (): Response {
            throw new Error("Function not implemented.")
        },
        bodyUsed: false,
        body: null,
        arrayBuffer: function () {
            throw new Error("Function not implemented.")
        },
        blob: function () {
            throw new Error("Function not implemented.")
        },
        formData: function () {
            throw new Error("Function not implemented.")
        },
        text: function () {
            throw new Error("Function not implemented.")
        },
    }))
}
