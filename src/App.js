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
          <div key={index} className="flex gap-3 mb-2">
            <button className="group w-[24px] h-[24px] border border-gray-300 hover:border-gray-400 flex-none items-center justify-center rounded-md" onClick={() => markTodo(index)}>
              <span className={`${!todo.isDone ? "opacity-10 group-hover:opacity-30" :""}`}>✓</span></button>{' '}
            <div className={`${todo.isDone ? "opacity-50" : ""} text-left overflow-hidden text-ellipsis relative`} >
              {/* <div className="h-[1px] w-full bg-black absolute top-1/2"></div> */}
              {todo.text}
            </div>
            <button className="w-[24px] h-[24px] ml-auto"onClick={() => removeTodo(index)}>✕</button>
          </div>
        ))
        }
      </div>
      
    </div>
  );
}
