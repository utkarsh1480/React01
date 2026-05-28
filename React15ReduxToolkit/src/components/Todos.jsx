import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/Todo/todoSlice';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Todos</h2>

            {todos.length === 0 && (
                <p className="text-gray-400 text-center">No todos yet. Add one!</p>
            )}

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <span className="text-gray-700">{todo.text}</span>

                        
                        <button
                           
                            className="ml-4 bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full transition-colors"
                        >
                            <FaEdit size={14} />
                        </button>
                        


                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="ml-4 bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full transition-colors"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos