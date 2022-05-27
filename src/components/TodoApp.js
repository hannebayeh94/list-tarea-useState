import React, { useState } from "react";
import Todo from "./Todo";
import './todoApp.css';

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodos = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodos]);
    setTitle("");
  };

    const handleUpdate = (id, value) => {

        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);


    }

    const handleDelete = (id) => {
        
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }

  return (
    <div className="todoContainer">
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={title} className="todoInput" />
        <input
          type="submit"
          value="Create todo"
          className="buttonCreate"
          onClick={handleSubmit}
        />
      </form>

      <div className="todosContainer"> 
        {
            todos.map(item => (
               <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
            ))
        }
      </div>
    </div>
  );
};

export default TodoApp;
