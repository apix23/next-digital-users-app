import { useState, useEffect } from "react"

export const useUserAlbums = (userId) => {
const [userAlbums, setUserAlbums] = useState([])
useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(response => response.json())
        .then(albumData => 
            setUserAlbums(albumData)
        )
    }, [userId]);

    return userAlbums
}