import React from "react";
import TodoListItem from "./todo";
import ToDoForm from "./todo_form";

const ToDoList = (props) => {
    return (
        <div>
            <h2>To-Do List:</h2>
            <ul>
                {props.todos.map((todo) => <TodoListItem key={todo.id} todo={todo}/>)}
            </ul>
            <br/>
            <ToDoForm receiveTodo={receiveTodo}/>
        </div>
    )
}

export default ToDoList;