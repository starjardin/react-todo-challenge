import React, { useState, useEffect } from 'react'

export default function AddTodo () {
  const [ todoItems, setTodoItems ] = useState([])
  const [ isComplete, setIsComplete ] = useState(false)

  function handleChange (e) {
    e.preventDefault()
    const { value } = e.target.todo
    if (value.trim() === "") return
    setTodoItems(prevItems => {
      return [
        ...prevItems,
        {
          title : value,
          id : Date.now(),
          complete : false
        }
      ]
    })
    e.target.reset()
  }

  function toggleComplete () {
    setIsComplete(prev => !prev)
  }

  return (
    <>
      <form onSubmit={handleChange}>
        <input 
          name="todo"
        />
        <button 
          className="bnt"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul className="todo_items">
        {todoItems.map(todoItem => {
          return (
          <li className="todo_listItem" key={todoItem.id}>
            <input 
              type="checkbox"
              onChange={toggleComplete}
              checked={isComplete}
            />
            <span>{todoItem.title}</span>
          </li>
        )})}
      </ul>
    </>
  )
}