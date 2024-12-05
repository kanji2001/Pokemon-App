import React from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md';

const ToDoList = ({key, data, checked, onHandleDeleteToDo, onHandleCheckedToDo}) => {
    return (
        <>
            <li key={key} className="todo-item">
                <span className={checked ? "checkList" : "notCheckList" }>{data}</span>
                <button className="check-btn" onClick={() => onHandleCheckedToDo(data)} >
                    <MdCheck />
                </button>
                <button
                    className="delete-btn"
                    onClick={() => onHandleDeleteToDo(data)}
                >
                    <MdDeleteForever />
                </button>
            </li>
        </>
    )
}

export default ToDoList