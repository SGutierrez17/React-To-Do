import React from "react"

export default function AddTask({onAddClick}) {
    const [addTaskIpt, setAddTaskIpt] = React.useState('');
    
    const handleInputChange = (e) => {
        setAddTaskIpt(e.target.value);
    };

  const handleOnAddClick = (e) => {
    e.preventDefault();
    onAddClick(addTaskIpt);
    setAddTaskIpt('');
};

  return (
    <form  onSubmit={handleOnAddClick}>
    <div className="add-task">
                <div>
                    <input type="text" id="add-task-ipt" value = {addTaskIpt} onChange={handleInputChange} placeholder="  Enter Task..."/>
                </div>
                <div>
                    <button className="task-btn" onClick={handleOnAddClick} type="submit" >Add</button>
                </div>
                </div>
</form>
)}
