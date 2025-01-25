import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, handleStatusChange, handleDelete }) {
  return (
    <div className="task-board">
      <div className="task-column">
        <h3>To Do: {tasks.filter((task) => task.status === 0).length}</h3>
        <ul>
          {tasks.filter((task) => task.status === 0).map((task) => (
            <TaskItem key={task.id} task={task} handleStatusChange={handleStatusChange} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>

      <div className="task-column">
        <h3>In Progress: {tasks.filter((task) => task.status === 1).length}</h3>
        <ul>
          {tasks.filter((task) => task.status === 1).map((task) => (
            <TaskItem key={task.id} task={task} handleStatusChange={handleStatusChange} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>

      <div className="task-column">
        <h3>Done: {tasks.filter((task) => task.status === 2).length}</h3>
        <ul>
          {tasks.filter((task) => task.status === 2).map((task) => (
            <TaskItem key={task.id} task={task} handleStatusChange={handleStatusChange} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}
