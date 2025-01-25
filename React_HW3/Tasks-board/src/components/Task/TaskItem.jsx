import React from "react";
import Button from "../Button/Button";

export default function TaskItem({ task, handleStatusChange, handleDelete }) {
  return (
    <li className="task-item">
      {task.title}
      {task.status === 0 && <Button title="In progress" handleClick={() => handleStatusChange(task.id, 1)} />}
      {task.status === 1 && (
        <>
          <Button title="To do" handleClick={() => handleStatusChange(task.id, 0)} />
          <Button title="Done" handleClick={() => handleStatusChange(task.id, 2)} />
        </>
      )}
      {task.status === 2 && <Button title="To archive" handleClick={() => handleDelete(task.id)} />}
    </li>
  );
}
