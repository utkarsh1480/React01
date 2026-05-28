
import { TodoProvider } from "./context"
import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from "./components/TodoItem"
function App() {
  const [todos, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem("todos") || "[]")
  })

  const addTodo = (todo) => { // this todo from form not from context

    setTodo((prev) => ([{ id: Date.now(), ...todo }, ...prev])) ///If your new state depends on old state → ALWAYS use functional update

  }
  const deleteTodo = (id) => {

    setTodo((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))

  }

  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const toggleComplete = (id) => {

    setTodo(((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))

  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <>
      <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {/* <TodoItem/> */}
              {todos.map((todo) => (

                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  )
}

export default App
