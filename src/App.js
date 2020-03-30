import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 2000,
  hideProgressBar: true,
  closeButton: false
}
)

@inject('TodoStore')
@observer
class App extends Component{
  constructor(){
    super();
    this.state = {
      task: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.TodoStore.addTodo(this.state.task);
    toast.success("New Task Added Successfully..!!", {
      position: toast.POSITION.TOP_RIGHT
    });
    this.setState({
      task: ''
    })

  }

  render() {
    return (
      < div className="app-container">
        <h1>ADD TODO</h1>
        <form 
          onSubmit={(event) => this.handleSubmit(event)}
          className="form-container">
          <input
            type="text"
            placeholder="Add New Todo.."
            className = "inputStyle"
            value={this.state.task}
            onChange = {this.handleChange}
          />
          <button disabled={!this.state.task}>ADD</button>
        </form>
      </div>
    );
  }
}

export default App;
