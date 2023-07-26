import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

const makeTodo = (title: string): { title: string } => {
  return { title };
};

const makeNewTodos = (
  todos: { title: string }[],
  newTodo: { title: string },
): { title: string }[] => {
  return [...todos, newTodo];
};

function App() {
  const [todos, setTodos] = useState<{ title: string }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const createTodo = () => {
    const newTodo = makeTodo(inputValue);
    setTodos(makeNewTodos(todos, newTodo));
    setInputValue('');
  };

  return (
    <div className="App">
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        createTodo={createTodo}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
