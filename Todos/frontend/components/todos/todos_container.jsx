import { connect } from "react-redux";
import ToDoList from "./todo_list";
import allTodos from "../../reducers/selectors";


const mSTP = (store) => {
    return {
        todos: allTodos(store)
    };
}

const ToDoContainer =  connect(mSTP)(ToDoList);

export default ToDoContainer;