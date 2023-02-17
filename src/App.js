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
    <div className="App">
      
      <div>
        <TodoForm 
              addTodo={addTodo}
        />
      {todos.map((todo, index) => (
        <div key={index}>
          <div className={todo.isDone ? "strikethrough" : ""} >{todo.text}</div>
          <button onClick={() => markTodo(index)}>✓</button>{' '}
          <button onClick={() => removeTodo(index)}>✕</button>
        </div>
        
      ))
      }
      
      </div>
      
    </div>
  );
}
