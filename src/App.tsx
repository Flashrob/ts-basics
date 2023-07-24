import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

const makeTodo = (title: any): any => {
  return { title };
};

const makeNewTodos = (todos: any, newTodo: any): any => {
  return [...todos, newTodo];
};

function App() {
  const [todos, setTodos] = useState<any>([]);
  const [inputValue, setInputValue] = useState<any>('');

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
