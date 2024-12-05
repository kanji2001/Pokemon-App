import React, { useState } from 'react';

const ToDoForm = ({ onAddToDo }) => {
    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({id: value, content: value, checked:false });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) return; 
        if (onAddToDo) {
            onAddToDo(inputValue);
        }
        setInputValue({id: " ", content : "", checked : false});
    };

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue.content}
                        onChange={(event) => handleInputChange(event.target.value)}
                        autoFocus
                    />
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
    );
};

export default ToDoForm;
