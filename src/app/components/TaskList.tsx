"use client";

import React, { useState } from "react";

interface TaskListProps {
  period: "day" | "night";
}

const TaskList = ({ period }: TaskListProps) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const addTask = () => {
    if (taskInput.trim()) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = taskInput.trim();
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, taskInput.trim()]);
      }
      setTaskInput("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
    }
  };

  const editTask = (index: number) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className={`task-list ${period}`}>
      <h2>{period === "day" ? "Dia" : "Noite"}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index === editIndex ? (
              <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                onBlur={addTask}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTask();
                  }
                }}
              />
            ) : (
              <>
                {task} <button className="edit-button" onClick={() => editTask(index)}>Editar</button>{" "}
                <button onClick={() => removeTask(index)}>Remover</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="add-task">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Adicionar tarefa"
        />
        <button onClick={addTask}>
          {editIndex !== null ? "Salvar" : "Adicionar"}{" "}
        </button>
      </div>
    </div>
  );
};

export default TaskList;
