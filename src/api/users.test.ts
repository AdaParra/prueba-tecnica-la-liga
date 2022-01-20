import { User } from "types/User"
import { UsersInformation } from "types/UsersInformation"
import { getUsers } from "./users"

describe("users.ts", () => {
    test("get users correctly", async () => {
        const usersInfo: UsersInformation = givenUsersInformation()
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

function givenUsersInformation(): UsersInformation {
    const users: Array<User> = [{
        avatar: "anyAvatar",
        email: "any@email.com",
        firstName: "anyFirstName",
        id: 4,
        lastName: "anyLastName"
    },
    {
        avatar: "anyOtherAvatar",
        email: "anyOther@email.com",
        firstName: "anyOtherFirstName",
        id: 7,
        lastName: "anyOtherLastName"
    }]
    const usersInfo: UsersInformation = {
        userList: users,
        numberOfPages: 2,
        totalOfPages: 1,
    }
    return usersInfo
}

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
