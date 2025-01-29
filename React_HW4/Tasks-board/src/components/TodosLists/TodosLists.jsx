import React from "react";
import TodosList from "../TodosLists/TodosList/TodosList";
import { TODOS_STATUS } from "../../constants/todos";

export default function TodosLists({ todos, updateTodoStatus, archiveTodo }) {
  const todoGroups = [
    { title: "To Do", status: TODOS_STATUS.TODO },
    { title: "On Hold", status: TODOS_STATUS.ON_HOLD },
    { title: "In Progress", status: TODOS_STATUS.PROGRESS },
    { title: "Done", status: TODOS_STATUS.DONE },
  ];

  return (
    <div className="todo-columns">
      {todoGroups.map((group, idx) => (
        <TodosList key={idx} title={group.title} todos={todos.filter((t) => t.status === group.status)} updateTodoStatus={updateTodoStatus} archiveTodo={archiveTodo} />
      ))}
    </div>
  );
}
