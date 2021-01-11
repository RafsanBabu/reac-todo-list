import React from 'react';
import './Form.css'

const Form = (props) => {

    const handleText = (e)=>{
        props.setTask(e.target.value);
    }
   
    return (
        <div>
            <form>
                <input type="text"  onChange={(e) => handleText(e)} placeholder="Add task here......"></input>
            </form>
        </div>
    );
};

export default Form;