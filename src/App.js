import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./todoSlice";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo({ id: uuidv4(), text, completed: false }));
    setText("");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 To-Do Manager</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
          placeholder="What do you need to do?"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center border-b py-2 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span
              onClick={() => dispatch(toggleComplete(todo.id))}
              className="cursor-pointer"
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
