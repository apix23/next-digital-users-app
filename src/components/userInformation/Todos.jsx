import { useUserTodos } from "../../hooks/useUserTodos";

export const Todos = ({ userId }) => {
  console.log("🚀 ~ file: Todos.jsx:4 ~ Todos ~ userId:", userId);
  const todos = useUserTodos(userId);

  return (
    <section className="user-todos">
      <h3>Todos</h3>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </section>
  );
};
