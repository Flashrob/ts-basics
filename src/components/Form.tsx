import { Dispatch, SetStateAction } from 'react';

export const Form = ({
  inputValue,
  setInputValue,
  createTodo,
}: {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  createTodo: () => void;
}) => {
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}></input>
      <button onClick={() => createTodo()}>Add Todo</button>
    </>
  );
};
