import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/Todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const handelAdd = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className="max-w-full mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Todo</h2>

            <form
                onSubmit={handelAdd}
                className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
                
                <input
                    type="text"
                    placeholder="Write a todo..."
                    className="w-full px-4 py-3 text-gray-700 outline-none placeholder-gray-400"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 shrink-0 transition-colors"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTodo