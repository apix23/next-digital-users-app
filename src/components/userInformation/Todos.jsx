import { useUserTodos } from "../../hooks/useUserTodos";

export const Todos = ({ userId }) => {
  const todos = useUserTodos(userId);

  return (
    <section className="user-todos">
      <h2>Todos</h2>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </section>
  );
};
