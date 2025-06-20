import React from "react";

const TaskCard = ({ task, onToggle, onDelete }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 bg-white rounded shadow ${
        task.done ? "opacity-60 line-through" : ""
      }`}
    >
      <span className="flex-1 text-left cursor-pointer" onClick={onToggle}>
        {task.title}
      </span>
      <button
        onClick={onDelete}
        className="ml-4 px-2 py-1 text-red-500 hover:text-red-700"
      >
        ✖
      </button>
    </div>
  );
};

export default TaskCard;
