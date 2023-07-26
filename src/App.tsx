import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

export type Todo = {
  title: string;
};

const makeTodo = (title: string): Todo => {
  return { title };
};

const makeNewTodos = (todos: Todo[], newTodo: Todo): Todo[] => {
  return [...todos, newTodo];
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
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
