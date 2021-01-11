import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList'




function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleAddButton = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...taskList, taskDetails]);
    }
  }


  const handleDelete = (e, id)=>{
    //console.log("Deleted");
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id != id));
  }

  const handleComplete = (e, id)=>{
    e.preventDefault();
    //let's find index of element
    const element = taskList.findIndex((elem) => elem.id == id);
    const newTaskList = [...taskList];
    /*newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };*/
    newTaskList[element].isCompleted=true;
    setTaskList(newTaskList);

  }

  return (
    <div className="container App">
      <h1 className="title">React Todo App</h1>
      <div className="form">
      <Form task={task} setTask={setTask}></Form>
      <button className="add-btn" onClick={handleAddButton}>Add</button>
      </div>
      {taskList.map(taskitem => <TodoList 
      handleDelete={handleDelete}
      handleComplete={handleComplete}
      taskList = {taskList}
      taskitem={taskitem}></TodoList>)}
    </div>
  );
}

export default App;
