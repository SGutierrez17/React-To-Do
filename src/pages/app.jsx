import React from 'react';

import Layout from '../templates/layout';
import Header from "../molecules/header";
import AddTasks from '../organism/add-tasks';
import TasksGroup from "../organism/tasks-group";

function App() {
  const [tasks, setTasks] = React.useState([]);

  const addTasks = (taskName) => {
    setTasks([...tasks, taskName])
  }

  const deleteTasks = (deleteName) => {
    setTasks([...tasks, deleteName])
  }
  

  return (
    <Layout> 
      <Header />
      <AddTasks onAddClickTask={addTasks}/>
      <TasksGroup 
      onDeleteClickTask={deleteTasks}
      taskList={tasks} 
      deleteList={tasks}/>
    </Layout>
  )
  }

export default App;
