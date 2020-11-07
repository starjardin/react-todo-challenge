import React, { useRef } from 'react'

export default function ToggleButtons ({ activeTasks, setActiveTasks, completeTasks,
setCompleteTasks, todoItems }) {
  const activeRef = useRef()

  function handleButtonAll () {
    setTodoItems(todoItems)
  }

  function handleActiveTasks () {
    setActiveTasks( todoItems.filter((item) => !item.complete))
  }


  function handleCompleteTasks () {
    setCompleteTasks(todoItems.filter((item) => item.complete))
    console.log(completeTasks);
  }

  return (
    <div className="buttons-container">
      <button 
        className="toggle-btn"
        onClick={handleButtonAll}
      >
          All
      </button>
      <button 
        ref={activeRef}
        className="toggle-btn"
        onClick={handleActiveTasks}
      >
          Active
      </button>
      <button 
        className="toggle-btn"
        onClick={handleCompleteTasks}
      >
          Complete
      </button>
    </div>
  )
}