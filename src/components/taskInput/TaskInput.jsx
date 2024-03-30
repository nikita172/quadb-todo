import React from 'react'
import x from "../../assets/x.svg";
const TaskInput = ({ closeTaskInput, handleSubmit }) => {
  return (
    <div className="addNoteContainer">
      <div className="addNoteWrapper">
        <div className="TodoHeader">
          <h2 className='addTodoTitle'>ADD TODO</h2>
          <button className='closeTodoBtn'><img src={x} className='closeTodoIcon' onClick={closeTaskInput} /></button>
        </div>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input className='titleInput' type="text" placeholder='Add Title' />
          <input className='titleInput' type="text" placeholder='Add Subtitle' />
          <textarea className='addTodoInput' type="text" placeholder='Add your Todo Here' />
          <button type="submit" className='addBtn'>ADD</button>
        </form>
      </div>
    </div>
  )
}

export default TaskInput