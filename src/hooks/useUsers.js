import { useEffect } from "react";
import { useState } from "react";

export const useUsers = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((users) => setUser(users));
    }, []);

    return users
}
