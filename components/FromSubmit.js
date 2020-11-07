import React, { useState } from 'react'

export default function FormSubmit ({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
        <input 
          name="todo"
          autoComplete="off"
          type="text"
          placeholder="Add your todo list here"
          required
        />
        <button 
          className="bnt add"
          type="submit"
        >
          Add
        </button>
      </form>
  )
}