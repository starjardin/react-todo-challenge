import React, { useState } from 'react'

export default function TodoList ({ 
  todoItem,
  toggleComplete,
  todoItems,
  setTodoItems
}) {
  const [ isComplete, setIsComplete ] = useState(false)

  function toggleComplete () {
    setIsComplete(
      todoItem.complete = !todoItem.complete
    )
  }

  function deleteItems () {
    setTodoItems(todoItems.filter((item) => {
      return item.id !== todoItem.id
    }))
  }

  console.log(todoItems);

  return (
    <>
      <li className="todo_listItem">
        <input 
          type="checkbox"
          onChange={toggleComplete}
          checked={isComplete}
        />
        <span>{todoItem.title}</span>
        <button 
          onClick={deleteItems}
          className="delete"
        >
          Delete
        </button>
      </li>
      <hr />
    </>
  )
}