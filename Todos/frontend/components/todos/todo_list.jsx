import React from "react";

const ToDoList = (props) => {
    // debugger
    return (
        <div>
            <h2>To-Do List:</h2>
            <ul>
                {props.todos.map((todo) => <li key={todo.id}> {todo.title}, Done? {todo.done.toString()}</li>)}
            </ul>
        </div>
    )
}

export default ToDoList;