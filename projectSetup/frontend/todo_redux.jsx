import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { receiveTodos, receiveTodo, deleteTodo, fetchTodos } from "./actions/todo_actions";
import { receiveSteps, receiveStep, deleteStep } from "./actions/step_action";
import allTodos from "./reducers/selectors";
// import * as Utils from "./util/todo_api_util";

const store = configureStore();

window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.deleteTodo = deleteTodo;
window.receiveStep = receiveStep;
window.receiveSteps = receiveSteps;
window.deleteStep = deleteStep;
window.allTodos = allTodos;
window.fetchTodos = fetchTodos;


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    store.dispatch((dispatch) => {
        console.log('If this prints out, the thunk middleware is working!')
      });
    
    ReactDOM.render(<Root store={store}/>, root);
})