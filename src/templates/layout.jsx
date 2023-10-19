export default function Layout({children}) {
const [headerComponent, enterTasksComponent, tasksComponent] = children;

  return (
    <div className="App">
    <header>{headerComponent}</header>
    <div className="enter-tasks">{enterTasksComponent}</div>
    <div className="tasks">{tasksComponent}</div>
    </div>
  )
}
