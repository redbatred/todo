import { useState } from "react";
import React from "react";
import App from "./App";
import "./index.css";
import todolist from "./todolist";

const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
