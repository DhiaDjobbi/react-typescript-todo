import React, { ChangeEvent } from "react";
interface Props {
  task: string;
  deadline: number;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
  addTask(): void;
}
const Header = ({ task, deadline, handleChange , addTask}: Props) => {
  return (
    <div className="header pt-2 mt-2">
      <div className="inputContainer">
        <input
          type="text"
          name="task"
          placeholder="Task...."
          className="form-control"
          value={task}
          onChange={handleChange}
        />
        <input
          type="number"
          name="deadline"
          value={deadline}
          placeholder="Deadline"
          className="form-control"
          min={0}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-dark" onClick={addTask}>Add Task</button>
    </div>
  );
};

export default Header;
