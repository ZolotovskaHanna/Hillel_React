import React, { useState } from "react";

export default function TodosForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({ title, status });
      setTitle("");
      setStatus(0);
    }
  };

  return (
    <form className="todos-form" onSubmit={handleSubmit}>
      <fieldset className="todo-form-container">
        <legend>Create Task</legend>
        <div className="form-group">
          <label htmlFor="todo-title">Title:</label>
          <input type="text" id="todo-title" placeholder="Enter task title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="todo-status">Status:</label>
          <select id="todo-status" value={status} onChange={(e) => setStatus(Number(e.target.value))}>
            <option value={0}>To Do</option>
            <option value={1}>In Progress</option>
            <option value={2}>Done</option>
          </select>
        </div>
        <button type="submit" className="todo-submit">Create Task</button>
      </fieldset>
    </form>
  );
}
