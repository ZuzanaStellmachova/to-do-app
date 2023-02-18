import React, { useState } from "react";
import './App.css';
import TodoForm from "./TodoForm"

export default function App() {
  const [todos, setTodos] = useState(
    [
      {text: "First task",
      isDone: false
      }
    ]
  )

  function addTodo(text) {
    const newTodos = [...todos,{ text: text, isDone: false }];
    setTodos(newTodos)
  }

  function markTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isDone = !todos[index].isDone;
    setTodos(newTodos)
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  return (
    <div className="App font-sans max-w-sm m-auto border-solid border-teal-500 rounded-sm">
      <h1 className="text-center text-4xl font-bold my-5">To do list</h1>
      
      <div className="content-wrapper">
        <TodoForm 
          addTodo={addTodo}
        />
        {todos.map((todo, index) => (
          <div key={index} className="flex gap-8">
            <div className={`${todo.isDone ? "strikethrough" : "flex-1 text-left"}`} >{todo.text}</div>
            <button className="" onClick={() => markTodo(index)}>✓</button>{' '}
            <button onClick={() => removeTodo(index)}>✕</button>
          </div>
        ))
        }
      </div>
      
    </div>
  );
}
