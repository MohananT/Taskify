import React from "react";
import { Todo } from "../model";

interface TodoListProps {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: TodoListProps): JSX.Element => {
    console.log(todos);
    return (
        <div>

            {todos.map((todo) => {
                return <li>{todo.todo}</li>
            })}

        </div>
    )
}

export default TodoList;