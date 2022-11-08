import React from "react";
type TodolistTypeProps = {
    title: string
    tasks: Array<TaskPropsType>
};
type TaskPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist = (props:TodolistTypeProps) =>{
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>HTML&CSS</span></li>
                <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                <li><input type="checkbox" checked={false}/> <span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
        )
}
