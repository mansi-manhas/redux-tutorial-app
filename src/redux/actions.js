import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "./actionTypes";

export const addTask = ({ taskId, task, completed }) => ({
    type: ADD_TASK,
    payload: {
        taskId,
        task,
        completed,
    },
});

export const updateTask = ({ taskId, task, completed }) => ({
    type: UPDATE_TASK,
    payload: {
        taskId,
        task,
        completed,
    },
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
})