export const TodoList = ({ todos }: any) => {
  return (
    <>
      {todos.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </>
  );
};
