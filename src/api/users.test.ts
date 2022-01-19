import { UsersInformation } from "types/UsersInformation"
import { getUsers } from "./users"

describe("users.ts", () => {
    test("get users correctly", () => {
        const usersInfo: UsersInformation = {
            data: [],
            page: 2,
            per_page: 1,
            total: 20,
            total_pages: 40
        }
        global.fetch = mockFetchApiWith(usersInfo)

        const numberOfPages = 6
        getUsers(numberOfPages)

        expect(global.fetch).toHaveBeenCalledWith(
            `https://reqres.in/api/users?page=${numberOfPages}`,
            {"headers": {"Content-Type": "application/json"}, "method": "GET"}
        )
    })
})

function mockFetchApiWith(usersInfo: UsersInformation): (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response> {
    return jest.fn(() => Promise.resolve({
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
