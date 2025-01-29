import React from "react";

export default function Button({ title, handleClick }) {
  return (
    <button className="todo-button" onClick={handleClick}>
      {title}
    </button>
  );
}
