import React from 'react'
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


  return (
    <>
      <ToggleButtons 
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        activeTasks={activeTasks}
        setActiveTasks={setActiveTasks}
        completeTasks={completeTasks}
        setCompleteTasks={setCompleteTasks}
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