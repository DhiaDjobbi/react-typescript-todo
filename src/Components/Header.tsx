import React, { ChangeEvent } from "react";
interface Props {
  task: string;
  deadline: number;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
  addTask(): void;
}
const Header = ({ task, deadline, handleChange , addTask}: Props) => {
  return (
    <div className="header">
      <div className="inputContainer">
        <input
          type="text"
          name="task"
          placeholder="Task...."
          value={task}
          onChange={handleChange}
        />
        <input
          type="number"
          name="deadline"
          value={deadline}
          placeholder="Deadline"
          min={0}
          onChange={handleChange}
        />
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default Header;
