import { connect } from "react-redux";
import ToDoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import { receiveTodo } from "../../actions/todo_actions";


const mSTP = (store) => {
    return {
        todos: allTodos(store)
    };
};

const mDTP = (dispatch) => {
    return {
        receiveTodo: (todo) => {
            dispatch(receiveTodo(todo))
        }
    };
}

const ToDoContainer =  connect(mSTP, mDTP)(ToDoList);

export default ToDoContainer;