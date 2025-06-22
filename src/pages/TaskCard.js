import React, { useEffect, useState } from "react";
import { getTaskIcon } from "../utils/iconMapper";
import { Icon } from "@iconify/react/dist/iconify.js";

const TaskCard = ({ task, onToggle, onDelete }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const taskIcon = getTaskIcon(task?.title);
      setIcon(taskIcon);
    }, 1000);

    return () => clearTimeout(timer);
  }, [task?.title]);

  return (
    <div
      className={`flex items-center justify-between p-4 bg-white rounded shadow ${
        task.done ? "opacity-60 line-through" : ""
      }`}
    >
      <div className="w-6 h-6 mr-2 flex items-center justify-center">
        {icon ? (
          <Icon icon={icon} className="text-blue-600 text-xl" />
        ) : (
          <div className="animate-pulse w-5 h-5 bg-blue-200 rounded-full" />
        )}
      </div>

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
