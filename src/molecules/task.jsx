import React from 'react'

export default function Task({taskText, onDeleteTask}) {
  return (
    <div className="task-container">
    <div>
        <span>{taskText}</span>
    </div>
    <div>
        <button className="task-btn delete-btn" onClick={() => onDeleteTask(taskText)}>Delete</button>
    </div>
</div>
  )
}
