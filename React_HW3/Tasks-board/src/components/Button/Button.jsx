import React from "react";

export default function Button({ title, handleClick }) {
  return <button className="task-button" onClick={handleClick}>{title}</button>;
}


