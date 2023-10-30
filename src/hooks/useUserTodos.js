import { useState, useEffect } from "react"

export const useUserTodos = (userId) => {
const [userTodos, setUserTodos] = useState([])
useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(todosData =>  setUserTodos(todosData))
    }, [userId]);

    return userTodos
}