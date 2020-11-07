import React, { useState } from 'react'
import FormSubmit from './FromSubmit'
import TodoList from './TodoList'

export default function AddTodo () {
  const [ todoItems, setTodoItems ] = useState([])

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

  return (
    <>
      <FormSubmit handleChange={handleChange} />
      <ul className="todo_items">
        {todoItems.map(todoItem => {
          return (
          <TodoList todoItem={todoItem} key={todoItem.id}/>
        )})}
      </ul>
    </>
  )
}