import React from "react";
import TodoListItem from "./todo";

const ToDoList = (props) => {
    // debugger
    return (
        <div>
            <h2>To-Do List:</h2>
            <ul>
                {props.todos.map((todo) => <TodoListItem key={todo.id} todo={todo}/>)}
            </ul>
        </div>
    )
}

export default ToDoList;