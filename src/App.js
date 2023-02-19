import React, { useState } from "react";
import './App.css';
import TodoForm from "./TodoForm"

export default function App() {
  const [todos, setTodos] = useState([])

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

  console.log(todos)

  return (
    <div className="App font-sans max-w-sm m-auto mt-[20px] border border-solid border-grey-500 rounded-md">
      <h1 className="text-center text-4xl font-bold my-5">To do list  &nbsp;<span className="text-3xl">🚀</span></h1>
      
      <div className="content-wrapper">
        <TodoForm 
          addTodo={addTodo}
        />
        {todos.map((todo, index) => (
          <div key={index} className="flex gap-3 mb-2">
            <button className="group w-[24px] h-[24px] border border-gray-300 hover:border-gray-400 flex-none items-center justify-center rounded-md" onClick={() => markTodo(index)}>
              <span className={`${!todo.isDone ? "opacity-10 group-hover:opacity-30" :""}`}>✓</span></button>{' '}
            <div className={`${todo.isDone ? "opacity-50" : ""} text-left overflow-hidden text-ellipsis relative`} >
              {todo.text}
            </div>
            <button className="text-gray-400 hover:text-black w-[24px] h-[24px] ml-auto"onClick={() => removeTodo(index)}>✕</button>
          </div>
        ))
        }

        { todos.length < 1 ? <div className="">Create your first to do &nbsp;✍🏻</div> : "" }

      </div>
      
    </div>
  );
}
