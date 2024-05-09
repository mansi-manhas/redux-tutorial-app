import { useDispatch, useSelector } from "react-redux";

import { deleteTask, updateTask } from "./redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleTaskCompletion = (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    dispatch(updateTask(updatedTask));
  };    

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.taskId}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskCompletion(task)}
            />

            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.task}
            </span>
            <button onClick={() => handleDeleteTask(task.taskId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
