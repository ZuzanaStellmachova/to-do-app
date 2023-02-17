import React, { useState } from "react";
import './App.css';
import Todo from "./Todo"

export default function App() {
const [todos, setTodos] = useState(
  [
    {text: "First task",
     isDone: false
    }
  ]
)

function addTodo(text) {
  const newTodos = [...todos, {text}];
  setTodos(newTodos)
}

function markTodo(index) {
  const newTodos = [...todos];
  newTodos[index].isDone = true;
  setTodos(newTodos)
}

function removeTodo(index) {
  const newTodos = [...todos];
  newTodos.splice(index, 1)
}

  return (
    <div className="App">
      
      <div>
        <Todo 
              addTodo={addTodo}
        />
      {todos.map((todo, index, markTodo, removeTodo) => (
        <div className="" key={index} index={index} markTodo={markTodo}
        removeTodo={removeTodo}>{todo.text}</div>
      ))
      }
      <button onClick={markTodo()}>✓</button>{' '}
      <button onClick={removeTodo()}>✕</button>
      </div>
      
    </div>
  );
}
