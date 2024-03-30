import React, { useState } from 'react'
import "./mainView.css"
import search from "../../assets/search.svg"
import up from "../../assets/chevron-up.svg";
import down from "../../assets/chevron-down.svg";
import TaskList from '../taskList/TaskList';
import { useSelector } from 'react-redux';

const MainView = ({ openNotebook, fullTodoHandler, openEditForm }) => {
  const todos = useSelector((state) => state.todo.todos);
  const [openMonths, setOpenMonths] = useState(false);

  const openMonthsHandler = () => {
    setOpenMonths(!openMonths);
  }

  return (
    <div className='mainViewContainer'>
      <div className="mainViewWrapper">
        <div className="searchContainer">
          <img className='searchIcon' src={search} />
          <input className='searchInput' placeholder='Search...' />
        </div>
        <div className="filterAndAddNote">
          <div className="filterNote">
            <span className='filNote'>All</span>
            <span className='filNote'>Today</span>
            <span className='filNote'>This month</span>
            <div className='otherFilter'>
              <span className='otherTitle'>Other
                <img onClick={openMonthsHandler} src={openMonths ? up : down} className='downIcon' />
              </span>
              {openMonths && <div className="allMonths">
                <span >January</span>
                <span>February</span>
                <span >March</span>
                <span >April</span>
                <span >May</span>
                <span >June</span>
                <span >July</span>
                <span >August</span>
                <span >September</span>
                <span >October</span>
                <span >November</span>
                <span >December</span>
              </div >}
            </div >
          </div >
          <div>
            <span className='addNote' onClick={openNotebook}>+ Add note</span>
          </div>
        </div >
        <div className="noteCards">
          {
            todos.length > 0 ? todos.map((todo, index) => (
              <TaskList key={index} fullTodoHandler={fullTodoHandler} todo={todo} index={index} openEditForm={openEditForm} />
            ))
              :
              <div className='nothingTitle'>
                <h3>
                  Nothing here!
                </h3></div>
          }
        </div>
      </div >
    </div >
  )
}

export default MainView