import './App.css';
import Task from './task/TaskComponent';

import { useState } from 'react';

function App() {

  const [newTask,setNewTask] = useState("");
  const [tasks,setTasks] = useState([]);

  const updateNewTask =  (event) => {
    setNewTask(event.target.value);
  }

  const addNewTask = (taskname) => {
    setTasks([...tasks,{id:tasks.length +1,taskname,completed:false}]);
  }

  const deleteTask = (task) => {
    setTasks(
      tasks.filter((currenttask) => {
        if(currenttask.id === task.id){
          return false;
        }else{
          return true;
        }

      })
    )
  }


  const completeTask = (task) => {

    setTasks(
      tasks.map((ctask,key) => {
        if(ctask.id === task.id){
          if(!task.completed){
            return {...task, completed:true}
          }else{
            alert("task already completed");
            return {...task, completed:true}
          }
          
          }
        })
    )
   
  }

  return (
    <div className="App">
      <div className='newtask'>
        <input onChange={updateNewTask} />
        <button onClick={() => {addNewTask(newTask)}}>New Task</button>
      </div> 
      <div className='tc'>
        {tasks.map((task,key) => {
          return (
            <div className='taskcontainer'
            style={{border:task.completed == true?"3px solid green":"3px solid red"}}>
              <button className='completed' onClick={() => {completeTask(task)}}>Done</button>
              <Task id = {task.id} taskname = {task.taskname} completed = {task.completed} />
              <button className='x' onClick={() => {deleteTask(task)}}>X</button>
            </div>
          ) 
        })}
      </div>
    </div>
  );
}

export default App;
