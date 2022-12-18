import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="section__tasks">
        {tasks.map(task => (
            <li
                className={`list__item ${task.done && hideDone
                    ? "list__item--hidden"
                    : ""}
                `}
                key={task.id}
            >
                <button
                className="list__button list__button--done"
                onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </button>
                <p className={`${task.done ? "list__item--done" : ""}"`}>
                    {task.content}
                </p>
                <button
                    className="list__button list__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;