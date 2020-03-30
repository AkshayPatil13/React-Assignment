import React from 'react';

const TaskCount = (props) => {
    return (
        <div style = {{
            float: 'right',
            border: '1px solid #eee',
            boxShadow: '0 2px 2px #ccc',
            width: '144px',
            padding: '15px',
            textAlign: 'left',
            }}>
            <h4>Total : {props.TodoStore.todos.length}</h4>
            <hr/>
            <h4 style={{color: '#7CFC00'}}>Completed : {props.TodoStore.todos.length - props.TodoStore.remainingTodoCount}</h4>
            <hr/>
            <h4 style={{color: '#FFA07A'}}>Pending   : {props.TodoStore.remainingTodoCount}</h4>
        </div>
    )
};

export default TaskCount;