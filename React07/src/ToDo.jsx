import React from 'react'
import { useState, useCallback } from 'react';




function ToDo() {

    const [todos, setTodos] = useState([]);

    // Safe: No dependencies needed
    const addTodo = useCallback((text) => {
        setTodos(prev => [...prev, { id: Date.now(), text }]);
    }, [todos]); // Empty array is safe here

  return (
      <>
          <h1>To Do List</h1>
          <ul>
              <li>Learn React</li>
              <li>Learn JavaScript</li>
              <li>Learn CSS</li>
          </ul>

          <button onClick={addTodo}>Add Todo : { todos.length }</button>
      </>
  )
}

export default ToDo