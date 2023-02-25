import React, { useState, useEffect } from "react";
import './App.css';
import TodoForm from "./TodoForm"

export default function App() {
  let localStorageData = JSON.parse(localStorage.getItem("todos")) 
  if (localStorageData === null ) {
  localStorageData = []
  }
  const [todos, setTodos] = useState(localStorageData)

  function addTodo(text) {
    const newTodos = [{ text: text, isDone: false },...todos];
    setTodos(newTodos)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function markTodo(index) {
    let newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone
    
    if (newTodos[index].isDone) {
      const item = newTodos[index]
      newTodos.splice(index, 1);
      newTodos = [...newTodos, item];
    }

    setTodos(newTodos)
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  return (
    <div className="App font-sans max-w-sm m-auto mt-[20px]">
      <h1 className="text-center text-4xl font-bold my-5">To do list  &nbsp;<span className="text-3xl">🚀</span></h1>
      
      <div className="content-wrapper">
        <TodoForm 
          addTodo={addTodo}
        />
        {todos.map((todo, index) => (
          <div key={index} className="group flex gap-3 mb-3 bg-white p-4 rounded-[12px]">
            <button className="    flex-none items-center justify-center rounded-xl" onClick={() => markTodo(index)}>
              <span className={`w-[24px] h-[24px] rounded-full block border-2 ${todo.isDone ? "bg-gray-200 border-transparent" : "border-[#2f80ed]"}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.253 7.1109L9.5962 12.7678C8.8151 13.5488 7.54882 13.5488 6.76777 12.7678L5 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span></button>{' '}
            <div className={`${todo.isDone ? "opacity-50" : ""} text-left overflow-hidden text-ellipsis relative`} >
              {todo.text}
            </div>
            <button className="opacity-0 group-hover:opacity-100 w-[24px] h-[24px] ml-auto"onClick={() => removeTodo(index)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 13.5L10 10M10 10L13.5 6.5M10 10L13.5 13.5M10 10L6.5 6.5" stroke="#969CC1" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        ))
        }

        { todos.length < 1 ? <div className="">Create your first to do &nbsp;✍🏻</div> : "" }

      </div>
      
    </div>
  );
}
