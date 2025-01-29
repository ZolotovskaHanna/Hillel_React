import React from "react";
import Button from "../../../Button/Button";
import { TODOS_STATUS } from "../../../../constants/todos";

export default function TodosListItem({ todo, updateTodoStatus, archiveTodo }) {
  let buttons = [];

  if (todo.status === TODOS_STATUS.TODO) {
    buttons = [{ title: "In Progress", action: () => updateTodoStatus(TODOS_STATUS.PROGRESS, todo) }];
  } else if (todo.status === TODOS_STATUS.PROGRESS) {
    buttons = [
      { title: "To Do", action: () => updateTodoStatus(TODOS_STATUS.TODO, todo) },
      { title: "Done", action: () => updateTodoStatus(TODOS_STATUS.DONE, todo) },
      { title: "On Hold", action: () => updateTodoStatus(TODOS_STATUS.ON_HOLD, todo) },
    ];
  } else if (todo.status === TODOS_STATUS.ON_HOLD) {
    buttons = [
      { title: "To Do", action: () => updateTodoStatus(TODOS_STATUS.TODO, todo) },
      { title: "In Progress", action: () => updateTodoStatus(TODOS_STATUS.PROGRESS, todo) },
    ];
  } else if (todo.status === TODOS_STATUS.DONE) {
    buttons = [{ title: "To Archive", action: () => archiveTodo(todo) }];
  }

  return (
    <li className="todo-item">
      <span>{todo.title}</span>
      <div>
        {buttons.map((btn, idx) => (
          <Button key={idx} title={btn.title} handleClick={btn.action} />
        ))}
      </div>
    </li>
  );
}
