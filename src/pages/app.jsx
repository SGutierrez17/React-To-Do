import React from 'react';

import AddTasks from '../organism/add-tasks';
import Header from "../molecules/header";
import Layout from '../templates/layout';
import TasksGroup from "../organism/tasks-group";


function App() {
  const [tasks, setTasks] = React.useState([]);

  const addTasks = (taskName) => {
    const isValidTaskName = !tasks.includes(taskName.toLowerCase()) && taskName !== '';
    
    if (isValidTaskName) {
      setTasks([...tasks, taskName.toLowerCase()]);
    }
  }

  const deleteTask = (taskToDelete) => {
    const filteredTasksList = tasks.filter((task) => task !== taskToDelete);

    setTasks(filteredTasksList);
  }
  

  return (
    <Layout> 
      <Header />
      <AddTasks onAddClick={addTasks}/>
      <TasksGroup taskList={tasks} onDeleteTask = {deleteTask} />
    </Layout>
  )
  }

export default App;
