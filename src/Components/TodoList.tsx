import React from "react";
import { ITask } from "../Interfaces";
import Task from "./Task";

interface Props {
  taskList: ITask[];
  deleteTask(id: number): void;
}
const TodoList = ({ taskList, deleteTask }: Props) => {
  return (
    <div className="todoList">
      {taskList.map((task: ITask, key: number) => {
        return <Task task={task} key={key} id={key} deleteTask={deleteTask} />;
      })}
    </div>
  );
};

export default TodoList;
