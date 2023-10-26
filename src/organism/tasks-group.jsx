import React from "react";

import Task from '../molecules/task';


export default function TasksGroup({taskList, onDeleteTask}) {

  return taskList.map((task, idx) => <Task key = {`task-${idx}`}  taskText = {task} onDeleteTask = {onDeleteTask}/>);
}

