import React, { useState } from 'react'

export default function FormSubmit ({ handleChange }) {
  return (
    <form onSubmit={handleChange}>
        <input 
          name="todo"
          autoComplete="off"
        />
        <button 
          className="bnt"
          type="submit"
        >
          Add
        </button>
      </form>
  )
}