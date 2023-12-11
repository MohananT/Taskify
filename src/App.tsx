import React, { FormEvent, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = (): JSX.Element => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleEvent = (e: FormEvent) => {
    e.preventDefault();

    const todoContent: Todo = { id: Date.now(), todo: todo, isDone: false };

    if (todo) {
      setTodo("");
      setTodos([...todos, todoContent]);
    }

  }

  // console.log(todos);

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleEvent={handleEvent} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
