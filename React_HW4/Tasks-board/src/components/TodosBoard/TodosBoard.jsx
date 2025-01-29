import React, { useState, useEffect } from "react";
import TodosForm from "../TodosForm/TodosForm";
import TodosLists from "../TodosLists/TodosLists";
import todosService from "../../services/todosAxios";
import "./style.sass";

export default function TodosBoard() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await todosService.get();
        setTodos(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    try {
      const newTodo = await todosService.post(todo);
      setTodos((prev) => [...prev, newTodo]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTodoStatus = async (status, todo) => {
    try {
      await todosService.put(todo.id, { status });
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? { ...t, status } : t)));
    } catch (err) {
      console.error(err);
    }
  };

  const archiveTodo = async (todo) => {
    try {
      await todosService.delete(todo.id);
      setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="todo-board">
      <TodosForm addTodo={addTodo} />
      <TodosLists todos={todos} updateTodoStatus={updateTodoStatus} archiveTodo={archiveTodo} />
    </div>
  );
}
