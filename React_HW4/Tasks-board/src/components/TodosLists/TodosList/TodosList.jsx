import React from "react";
import TodosListItem from "../TodosList/TodosListItem/TodosListItem";

export default function TodosList({ title, todos, updateTodoStatus, archiveTodo }) {
  return (
    <div className="todo-column">
      <h3>{title}: {todos.length}</h3>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <TodosListItem key={todo.id} todo={todo} updateTodoStatus={updateTodoStatus} archiveTodo={archiveTodo} />
          ))}
        </ul>
      )}
    </div>
  );
}
