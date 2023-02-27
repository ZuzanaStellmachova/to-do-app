import React, { useState, useEffect } from "react";
import './App.css';
import TodoForm from "./TodoForm"
import TodoCounter from "./TodoCounter"

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
  
  function updateTodos() {
    const arrayIsDone = todos.filter(item => item.isDone);
    const arrayIsNotDone = todos.filter(item => !item.isDone);
    const all = [ ...arrayIsNotDone, ...arrayIsDone]
    setTodos(all);
  }

  function markTodo(index) {
    let newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone
    
    if (newTodos[index].isDone) {
      const item = newTodos[index]
      newTodos.splice(index, 1);
      newTodos = [...newTodos, item];
    }

    setTodos(newTodos)
    updateTodos()
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  return (
    <div className="App font-sans max-w-sm m-auto mt-[20px]">
      <h1 className="ml-4 text-left text-2xl font-bold my-5">My todos</h1>
      
      <div className="content-wrapper">  
        <TodoForm addTodo={addTodo}/>
        <TodoCounter todos={todos}/>
        {todos.map((todo, index) => (
          <div key={index} className="todo-item flex gap-3 mb-3 bg-white p-3 rounded-[12px]">
              <div onClick={() => markTodo(index)} className={`flex-none items-center justify-center w-[24px] h-[24px] rounded-full block border-2 ${todo.isDone ? "bg-gray-200 border-transparent" : "border-[#2f80ed]"}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.253 7.1109L9.5962 12.7678C8.8151 13.5488 7.54882 13.5488 6.76777 12.7678L5 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            <div className={`${todo.isDone ? "opacity-50" : ""} text-sm text-left overflow-hidden text-ellipsis relative`} >
              {todo.text}
            </div>
            <div className="todo-remove opacity-30 group-hover:opacity-100 w-[24px] h-[24px] ml-auto"onClick={() => removeTodo(index)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 13.5L10 10M10 10L13.5 6.5M10 10L13.5 13.5M10 10L6.5 6.5" stroke="#969CC1" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        ))
        }

        {/* { todos.length < 1 ? <div className="text-left ml-[65px]">Create your first to do &nbsp;✍🏻</div> : "" } */}

      </div>
      
    </div>
  );
}
