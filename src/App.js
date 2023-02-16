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

  return (
    <div className="App">
      
      <div>
        <Todo 
              addTodo={addTodo}
        />
      {todos.map((todo, index) => (
        <div className="" key={index}>{todo.text}</div>
      ))
      }

      </div>
      
    </div>
  );
}
