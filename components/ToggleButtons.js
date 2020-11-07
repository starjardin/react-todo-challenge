import React from 'react'

export default function ToggleButtons ({ handleButtonAll, handleActiveTasks, handleCompleteTasks }) {

  return (
    <div className="buttons-container">
      <button 
        className="toggle-btn"
        onClick={handleButtonAll}
      >
          All
      </button>
      <button 
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