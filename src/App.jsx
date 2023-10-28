import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) => setUser(users));
  }, []);
  return (
    <div className="layout">
      <header>
        <h1>Users Apps - List of users</h1>
      </header>
      <main>
        <div className="users-container">
          {users.map((user) => (
            <article key={user.id}>
              <h3>{user.username}</h3>
            </article>
          ))}
        </div>
      </main>
      <footer>
        <h4>Develop by Alejandro Sanchez</h4>
      </footer>
    </div>
  );
}

export default App;
