import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBtn({ title, route }) {
  const navigate = useNavigate();
  return <button onClick={() => navigate(route)}>{title}</button>;
}