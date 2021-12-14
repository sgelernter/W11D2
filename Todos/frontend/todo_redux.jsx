import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";

const store = configureStore();
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

function Root() {
    return (
        <h1> Todos App </h1>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    ReactDOM.render(<Root />, root);
})