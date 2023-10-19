import React from "react";


export default function TasksGroup({taskList, onDeleteClickTask}) {
  const [addTaskIpt, setAddTaskIpt] = React.useState("");

  const handleInputChange = (e) => {
    setAddTaskIpt(e.target.value);
  }

  return (
    <ul>
      {
        taskList.map((task) => (
          <li>
            <input type="text" name='field' id='field' value={task} onChange={handleInputChange}/>  
            <button onClick={() => onDeleteClickTask(addTaskIpt)}>Delete</button>   
          </li>
        ))
      }
    </ul>
    
  )
}

