import { connect } from "react-redux";
import ToDoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import { receiveTodo, fetchTodos } from "../../actions/todo_actions";


const mSTP = (store) => {
    return {
        todos: allTodos(store)
    };
};

const mDTP = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos())
})

export default connect(mSTP, mDTP)(ToDoList);