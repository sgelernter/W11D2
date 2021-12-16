import React from "react";


const TodoListItem= ({todo}) => {
    return (
        <li> Title: {todo.title} </li>
    )
}

export default TodoListItem;