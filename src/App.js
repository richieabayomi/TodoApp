import './App.css';
import Task from './task/TaskComponent';

import { useState } from 'react';

function App() {

  const [newTask,setNewTask] = useState("")

  const updateNewTask =  (event) => {
    setNewTask(event.target.value)
  }

  return (
    <div className="App">
      <div className='newtask'>
        <input onChange={updateNewTask} />
        <button>New Task</button>
      </div> 
      <div className='tc'>
        {newTask}
      </div>
    </div>
  );
}

export default App;
