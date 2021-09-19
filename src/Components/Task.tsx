import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  id: number;
  deleteTask(id: number): void;
}

const Task = ({ task, id, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>#{id}</span>
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => deleteTask(id)} className="btn btn-outline-danger">
        X
      </button>
    </div>
  );
};

export default Task;
