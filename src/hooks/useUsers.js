import {  useFetch } from "./useFetch";

const USER_URL = "https://jsonplaceholder.typicode.com/users/"
export const useUsers = () => {
    const {data: users} = useFetch(USER_URL)
    return users
}
