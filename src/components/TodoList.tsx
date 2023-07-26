export const TodoList = ({ todos }: { todos: { title: string }[] }) => {
  return (
    <>
      {todos.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </>
  );
};
