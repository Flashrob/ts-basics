import type { Todo } from '../App';

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <>
      {todos.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </>
  );
};
