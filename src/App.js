import React from "react";

import { Provider } from "react-redux";

import store from "./redux/store";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const App = () => {

  return(
  <Provider store={store}>
    <div>
      <h1>Task Management</h1>
      <TaskForm />
      <TaskList />
    </div>
  </Provider>
  )
}

export default App;
