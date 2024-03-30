import React, { useState } from 'react'
import "./taskList.css"
import vertical from "../../assets/more-vertical.svg";
import x from "../../assets/x.svg";
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodos, setToPendingTodos } from '../../state/slices/todoSlice'
const TaskList = ({ fullTodoHandler, todo, index, openEditForm }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  const closeMenuHandler = () => {
    setOpenMenu(!openMenu);
  }
  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  }
  const month = todo.month == 1 ? "Jan" :
    todo.month == 2 ? "Feb" :
      todo.month == 3 ? "Mar" :
        todo.month == 4 ? "Apr" :
          todo.month == 5 ? "May" :
            todo.month == 6 ? "June" :
              todo.month == 7 ? "July" :
                todo.month == 8 ? "Aug" :
                  todo.month == 9 ? "Sept" :
                    todo.month == 10 ? "Oct" :
                      todo.month == 11 ? "Nov" :
                        todo.month == 12 ? "Dec" : ""

  return (
    <div className={`cardContainer ${todo.status === "completed" ? "background" : ""}`}>
      <div className="cardHeader">
        <div className='headerDiv'>
          <h3>{todo.title}</h3>
        </div>
        <img className='openEditListIcon' src={vertical} onClick={openMenuHandler} />
      </div>
      <div className='todoStatus'>
        <span
          className={`${todo.status === "pending" ? "pendingSelected" : ""}`}
          onClick={() => { dispatch(setToPendingTodos(todo.id)) }}
        >pending</span>
        <span
          className={`${todo.status === "completed" ? "completedSelected" : ""}`}
          onClick={() => { dispatch(completeTodos(todo.id)) }}>completed</span>
      </div>
      <span className='createdDate'>{todo.day} {month} {todo.year}</span>
      <span className="subTitle">
        <div className='yellowDot'></div>{todo.subTitle}</span>
      <pre className="todos">
        {todo.todo}
      </pre>

      {openMenu && <div className="editOptions">
        <button className='editOptionCloseBtn' onClick={closeMenuHandler}><img className='editOptionCloseIcon' src={x} /></button>
        <span
          onClick={() => {
            openEditForm(todo.id)
            closeMenuHandler()
          }}>edit
        </span>

        <span onClick={() => {
          dispatch(deleteTodo({ index: todo.id }));
          closeMenuHandler();
        }}>delete
        </span>

        <span
          onClick={() => {
            fullTodoHandler(index);
            closeMenuHandler();
          }}>See full
        </span>
      </div>}
    </div>
  )
}

export default TaskList