import React, { useEffect, useState } from "react";
import tasksService from "../../services/tasksAxios";
import TaskList from "./TaskList";
import "../style.sass";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await tasksService.get();
      if (Array.isArray(data)) {
        setTasks(data);
      }
    } catch {}
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const updatedTask = tasks.find(task => task.id === id);
      if (!updatedTask) return;
      
      await tasksService.put(id, { ...updatedTask, status: newStatus });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task
        )
      );
    } catch {}
  };

  const handleDelete = async (id) => {
    try {
      await tasksService.delete(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch {}
  };

  return (
    <TaskList
      tasks={tasks}
      handleStatusChange={handleStatusChange}
      handleDelete={handleDelete}
    />
  );
}
