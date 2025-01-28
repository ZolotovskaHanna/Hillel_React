import React from "react";
import Button from "../../Button/Button";

export default function TaskItem({ item = {}, btns = [] }) {
  return (
    <li className="task-item">
      <span>{item.title}</span>
      {btns.map((btn, index) => (
        <Button key={index} title={btn.title} handleClick={() => btn.action(item)} />
      ))}
    </li>
  );
}
