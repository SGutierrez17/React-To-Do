import React from "react"

export default function AddTasks({onAddClickTask}) {
  const [addTaskIpt, setAddTaskIpt] = React.useState("");

  const handleInputChange = (e) => {
    setAddTaskIpt(e.target.value);
  }

  return (
  <div className="layoutEnterTasks">
  <input type="text" name='field' id='field' placeholder='Enter task...' value={addTaskIpt} onChange={handleInputChange}/> 
    {/* <div className="options">
    <select name="field" id="field">
      <option value="Enter task">Enter task...</option>
      <option value="Clean car">Clean car</option>
      <option value="Wax car">Wax car</option>
      <option value="Pay credit card">Pay credit card</option>
      <option value="Pay cash">Pay cash</option>
    </select>
    </div> */}
    <button onClick={() => onAddClickTask(addTaskIpt)}>Add</button>     
      </div>
)}
