import React from "react";

function uniqueId() {
    return new Date().getTime();
  }

const initialState = {id: uniqueId(), title: "", body: "", done: false};

class ToDoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = initialState;
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.updateDone = this.updateDone.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle(e) {
        this.setState({title: e.target.value});
    }
    
    updateBody(e) {
        this.setState({body: e.target.value});
    }
    
    updateDone(e) {    
        this.setState({done: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state);
        this.props.receiveTodo(todo);
        this.setState(initialState);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add a To-Do:</h3>
                <label>Title:
                    <input type="text" value={this.state.title} onChange={this.updateTitle} />
                </label>
                <label>Body:
                    <input type="text" value={this.state.body} onChange={this.updateBody} />
                </label>
                <label>Done?
                    <label>Yes:
                    <input type="radio" value="true" onClick={this.updateDone} name="done"/>
                    </label>
                    <label>No:  
                    <input type="radio" value="false" onClick={this.updateDone} name="done"/>
                    </label>
                </label>
                <input type="submit" value="Add To-Do" />
            </form>
        )
    }
}

export default ToDoForm;