import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodos, receiveTodo, deleteTodo } from "./actions/todo_actions";
import { receiveSteps, receiveStep, deleteStep } from "./actions/step_action";

const store = configureStore();
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.deleteTodo = deleteTodo;
window.receiveStep = receiveStep;
window.receiveSteps = receiveSteps;
window.deleteStep = deleteStep;



function Root() {
    return (
        <h1> Todos App </h1>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    ReactDOM.render(<Root />, root);
})