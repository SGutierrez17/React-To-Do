import todo from'../assets/to-do.jpg'

import '../styles/styles.css'

export default function Header() {
  return (
    <div className="header-container">
         <img src={todo} className="to-do" alt="to-do"/>
         <span className="todo-label">To-Do List</span>
    </div>
  )
}
