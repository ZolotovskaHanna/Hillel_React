import React, { useState, useEffect } from "react";
import "./style.sass";
import service from "../../../services/tasksAxios";
import { TASK_STATUS } from "../../../constants/tasks";
import TaskList from "../TaskList/TaskList";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await service.get();
        setTasks(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  const updateTaskStatus = async (status, item) => {
    try {
      await service.put(item.id, { status });
      setTasks((prev) =>
        prev.map((task) => (task.id === item.id ? { ...task, status } : task))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const archiveTask = async (item) => {
    try {
      await service.delete(item.id);
      setTasks((prev) => prev.filter((task) => task.id !== item.id));
    } catch (err) {
      console.error(err);
    }
  };

  const taskGroups = [
    {
      title: "To Do",
      tasks: tasks.filter((task) => task.status === TASK_STATUS.TODO),
      btns: [{ title: "In progress", action: (item) => updateTaskStatus(TASK_STATUS.PROGRESS, item) }],
    },
    {
      title: "In Progress",
      tasks: tasks.filter((task) => task.status === TASK_STATUS.PROGRESS),
      btns: [
        { title: "To do", action: (item) => updateTaskStatus(TASK_STATUS.TODO, item) },
        { title: "Done", action: (item) => updateTaskStatus(TASK_STATUS.DONE, item) },
      ],
    },
    {
      title: "Done",
      tasks: tasks.filter((task) => task.status === TASK_STATUS.DONE),
      btns: [{ title: "To archive", action: (item) => archiveTask(item) }],
    },
  ];

  return (
    <div className="task-board">
      {taskGroups.map((group, idx) => (
        <TaskList key={idx} title={group.title} tasks={group.tasks} btns={group.btns} />
      ))}
    </div>
  );
}
