import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';
import { FaTrashAlt } from 'react-icons/fa';
import EditableLabel from 'react-inline-editing';
import NoDataFound from '../assets/images/nodata-found.png';
import { toast } from 'react-toastify';
import '../assets/css/Todos.css'

@inject('TodoStore')
@observer
 class Todos extends Component{
 
    deleteHandler = (todoId) => {
        this.props.TodoStore.removeTodo(todoId);
        toast.success("Task Deleted Successfully..!!", {
            position: toast.POSITION.TOP_RIGHT
          });
    }
    checkHandler = (todoId) => {
        this.props.TodoStore.markAsCompleted(todoId);
    }
 
    _handleFocus(text){
        // this.props.TodoStore.setTodoId(text);
    }

    _handleFocusOut = (text) => {
        if(text.length === 0){
            toast.warn("Task title cannot be kept empty",{
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            })
        }
        const todoId = this.props.TodoStore.todoId;
       this.props.TodoStore.updateTodo(text,todoId);
    }

    render(){
        const { TodoStore } = this.props;
    
        return(
            <div>
                {
                    TodoStore.todosCount === 0 ?
                        <img 
                            src={NoDataFound} 
                            alt="No Data Found"
                            className="image"
                        /> : 
                        (<>
                            <ul style={{margin: '50px'}}>
                                {
                                    TodoStore.todos.map(todo=> (
                                        <li className="listStyle" key={todo.id}>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onClick = {() => this.checkHandler(todo.id)}
                                            />

                                            {todo.completed ? 
                                                <span style={{
                                                        verticalAlign: 'middle',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    {todo.task}
                                                </span> :
                                                <div  style = {{display: 'inline-block',cursor: 'pointer'}}>
                                                    <EditableLabel 
                                                        text={todo.task}
                                                        labelClassName='myLabelClass'
                                                        inputClassName='myInputClass'
                                                        inputWidth='200px'
                                                        inputHeight='25px'
                                                        inputFontWeight='bold'
                                                        onFocus={this._handleFocus}
                                                        onFocusOut={this._handleFocusOut}
                                                    />
                                                </div>
                                            }
                                            <div style={{float:'right'}}>
                                                <span style={{ cursor:'pointer'}}>
                                                    <FaTrashAlt 
                                                        color="red" 
                                                        onClick={ () => this.deleteHandler(todo.id)}
                                                    />
                                                </span>
                                            </div>    
                                        </li>
                                    ))
                                }
                            </ul>
                            <h4 style={{marginLeft: '50px'}}>
                                Tasks left : {TodoStore.remainingTodoCount}
                            </h4>
                            <small style={{marginLeft: '50px'}}>
                                Please click on the task to edit it.
                            </small>
                        </>)     
                }
            </div>
        )
    }
}

export default Todos;