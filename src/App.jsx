import "./App.css";
import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { UserInfo } from "./UserInfo";

function App() {
  const users = useUsers();
  const [userId, setUserId] = useState();

  const handleClick = (id) => () => {
    setUserId(id);
  };
  return (
    <div className="layout">
      <header>
        <h1>Users Apps - List of users</h1>
      </header>
      <main>
        <section className="users-container">
          {users.map((user) => (
            <article key={user.id} onClick={handleClick(user.id)}>
              <h3>{user.name}</h3>
            </article>
          ))}
        </section>
        {userId && <UserInfo userId={userId} />}
      </main>
      <footer>
        <h4>Develop by Alejandro Sanchez</h4>
      </footer>
    </div>
  );
}

export default App;
