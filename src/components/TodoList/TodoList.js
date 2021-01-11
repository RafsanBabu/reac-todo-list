import React from 'react';
import './TodoList.css'

const TodoList = (props) => {
    return (
        <div className="todoitem">
            <div className="d-flex list">
            <p>{props.taskitem.value}</p>
            <button className="delete" onClick={(e) =>props.handleDelete(e, props.taskitem.id)}>Delete</button>
            <button className={props.taskitem.isCompleted ? "crossText" : "completed"} onClick={(e) =>props.handleComplete(e, props.taskitem.id)}>Completed</button>
            </div>
            
        </div>
    );
};

export default TodoList;