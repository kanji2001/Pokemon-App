import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import './Todo.css';
import ToDoList from './ToDoList';
import ToDoDate from './ToDoDate';


const todoKey = 'reactTodo' ;

const ToDoLocalStorage = () => {

    try {
        const rawTodos = localStorage.getItem(todoKey);
        return rawTodos ? JSON.parse(rawTodos) : [];
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return [];
    }
}

const ToDo = () => {
    const [task, setTask] = useState(() => ToDoLocalStorage());
    
    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        if (!content) return;

        const ifToDoContentMatched = task.find((curTask) => curTask.content === content);
        if (ifToDoContentMatched) return;
        setTask((prevTask) => [...prevTask, { id, content, checked }]);

    };

    localStorage.setItem(todoKey, JSON.stringify(task));

    const handleDeleteTask = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value );
        setTask(updatedTask);
    };

    const handleCheckedToDo = (content) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content === content) {
                return {...curTask, checked : !curTask.checked}
            }else{
                return curTask ;
            }
        })
        setTask(updatedTask);
    }

    const handleClearAll = () => {
        setTask([]);
    };

    return (
        <section className="todo-container">
            <header>
                <h1>TODO LIST</h1>
                <ToDoDate />
            </header>
            <ToDoForm onAddToDo={handleFormSubmit} />
            <section>
                <ul>
                    {task.map((curTask) => {
                        return <ToDoList key={curTask.id} data={curTask.content} checked={curTask.checked} onHandleDeleteToDo={handleDeleteTask} onHandleCheckedToDo = {handleCheckedToDo} />;
                    })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearAll}>
                    Clear All
                </button>
            </section>
        </section>
    );
};

export default ToDo;
