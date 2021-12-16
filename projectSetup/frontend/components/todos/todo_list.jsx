import React from "react";
import TodoListItem from "./todo";
import ToDoForm from "./todo_form";

class ToDoList extends React.Component{

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchTodos();
    }
    
    render(){
        return (<div>
                    <h2>To-Do List:</h2>
                    <ul>
                        {this.props.todos.map((todo) => <TodoListItem key={todo.id} todo={todo}/>)}
                    </ul>
                    <br/>
                    <ToDoForm receiveTodo={this.props.receiveTodo}/>
               </div>)
    }
}

export default ToDoList;