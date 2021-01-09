import React from 'react';
import './TodoList.css'

const TodoList = (props) => {
    return (
        <div>
            <div className="todoitem">
            <p>{props.taskitem.value}</p>
            <button onClick={(e) =>props.handleDelete(e, props.taskitem.id)}>Delete</button>
            <button onClick={(e) =>props.handleComplete(e, props.taskitem.id)}>Completed</button>
            </div>
            
        </div>
    );
};

export default TodoList;