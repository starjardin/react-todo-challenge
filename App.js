import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import ToggleButtons from './components/ToggleButtons'

export default function App () {
  const [ todoItems, setTodoItems ] = useState([])
  const [activeTasks, setActiveTasks ] = useState([])
  const [completeTasks, setCompleteTasks ] = useState([])

  function handleSubmit (e) {
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
      <Header />
      <AddTodo 
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        handleSubmit={handleSubmit}
        activeTasks={activeTasks}
        setActiveTasks={setActiveTasks}
        completeTasks={completeTasks}
        setCompleteTasks={setCompleteTasks}
      />
    </>
  )
}