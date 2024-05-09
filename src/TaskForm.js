import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { addTask } from "./redux/actions";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!taskName || !taskName.trim()) return;

    const newTask = {
      taskId: uuidv4(),
      task: taskName,
      completed: false,
    };

    dispatch(addTask(newTask));

    setTaskName("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
