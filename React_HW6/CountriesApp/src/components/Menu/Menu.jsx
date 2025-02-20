import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li className="navigator">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navigator">
          <NavLink to="/countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}