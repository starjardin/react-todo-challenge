import React from 'react'
import useToggleComplete from '../useToggleComplet';

export default function TodoList ({ todoItem }) {
  console.log(todoItem);
  const { isComplete, toggleComplete } = useToggleComplete(false)
  return (
    <li className="todo_listItem">
      <input 
        type="checkbox"
        onChange={toggleComplete}
        checked={isComplete}
      />
      <span>{todoItem.title}</span>
    </li>
  )
}