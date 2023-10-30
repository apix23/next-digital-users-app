import { useState, useEffect } from "react"

export const useUserInfo = (userId) => {
    
    const USER_URL = `https://jsonplaceholder.typicode.com/users/`
    const [user, setUser] = useState()
    useEffect(() => {
        fetch(USER_URL+userId)
        .then(response => response.json())
        .then(data => setUser(data))
    }, [userId, USER_URL]);

    return user
}