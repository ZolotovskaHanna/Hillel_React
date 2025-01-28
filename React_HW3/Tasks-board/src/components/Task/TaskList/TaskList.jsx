import React from "react";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ title = "", tasks = [], btns = [] }) {
  return (
    <div className="task-column">
      <h3>
        {title}: {tasks.length}
      </h3>
      {tasks.length > 0 && (
        <ul>
          {tasks.map((item) => (
            <TaskItem key={item.id} item={item} btns={btns} />
          ))}
        </ul>
      )}
    </div>
  );
}
