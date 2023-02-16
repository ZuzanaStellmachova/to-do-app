import React, { useState } from "react";
import './App.css';

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
      <form>
        <input type="search" placeholder="Type your to do"/>
        <button type="submit">Save</button>
      </form>
      <div class="card">
        <Todo 
              todo={todo}
        />
      </div>
      
    </div>
  );
}
