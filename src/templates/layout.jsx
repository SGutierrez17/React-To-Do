export default function Layout({children}) {
const [headerComponent, addTasksComponent, tasksGroupComponent] = children;

  return (
    <div className="App">
    <header>{headerComponent}</header>
    <div className="add-task">{addTasksComponent}</div>
    <div className="tasks-group">{tasksGroupComponent}</div>
    </div>
  )
}
