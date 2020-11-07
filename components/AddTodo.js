import React, { useState } from 'react'
import FormSubmit from './FromSubmit'
import TodoList from './TodoList'
import ToggleButtons from './ToggleButtons'

export default function AddTodo (
  {todoItems,
  handleSubmit,
  setTodoItems,
  activeTasks,
  setActiveTasks,
  completeTasks,
  setCompleteTasks,
  }
) {

  function handleButtonAll () {
    setTodoItems(todoItems)
  }

  function handleActiveTasks () {
    setActiveTasks( todoItems.filter((item) => !item.complete))
    console.log(activeTasks);
  }


  function handleCompleteTasks () {
    setCompleteTasks(todoItems.filter((item) => item.complete))
    console.log(completeTasks);
  }

  return (
    <>
      <ToggleButtons 
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        handleButtonAll={handleButtonAll}
        handleActiveTasks={handleActiveTasks}
        handleCompleteTasks={handleCompleteTasks}
      />
      <FormSubmit handleSubmit={handleSubmit} />
      <ul className="todo_items">
        {todoItems.map(todoItem => {
          return (
          <TodoList 
            todoItem={todoItem} 
            key={todoItem.id}
            todoItems={todoItems}
            setTodoItems={setTodoItems}
          />
        )})}
      </ul>
    </>
  )
}