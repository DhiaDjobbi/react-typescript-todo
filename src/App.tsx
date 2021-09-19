import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline };
    setTaskList([...taskList, newTask]);
    setTask("");
    setDeadline(0);
  };

  
  return (
    <div className="App">
      <Header
        task={task}
        deadline={deadline}
        handleChange={handleChange}
        addTask={addTask}
      />
      <div className="todoList"></div>
    </div>
  );
};

export default App;
