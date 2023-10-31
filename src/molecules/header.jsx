import todo from'../assets/to-do.jpg'

import '../styles/styles.css'

export default function Header() {
  return (
    <div className="header-container">
            <img src={todo} alt="todo list" />
            <span className="header-todo-label">To-Do List</span>
        </div>
  )
}
