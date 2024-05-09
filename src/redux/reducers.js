import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "./actionTypes";

const initialState = {
    tasks: [],
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };

        case UPDATE_TASK:
            const updatedTask = state.tasks.map(task => task.taskId === action.payload.taskId ? action.payload : task);
            return {
                ...state,
                tasks: updatedTask,
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.taskId !== action.payload),
            };

        default:
            return state;
    }


}

export default taskReducer;