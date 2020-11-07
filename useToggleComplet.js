import { useState } from 'react'

export default function useToggleComplete () {
  const [ isComplete, setIsComplete ] = useState(false)

  function toggleComplete () {
    setIsComplete(prevIsCompleteState => !prevIsCompleteState)
  }

  return {
    isComplete, toggleComplete
  }
}
