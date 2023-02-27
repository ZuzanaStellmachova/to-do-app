import React, { useState } from "react";

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState("");

    function handleSubmit(event) {
        event.preventDefault();  
        console.log(value);
        if (value !== '') {
            addTodo(value);
            setValue("");  
        }
    }

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (
        <div>

            <form className="flex mt-8 mb-3 gap-2 align-middle" onSubmit={handleSubmit}>
                <label className="flex gap-2 p-4">      
                    <div className="basis-1/9 align-middle ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <rect x="1" y="1" width="22" height="22" rx="11" stroke="#969CC1" strokeWidth="2"/>
                            </g>
                        </svg>
                    </div>
                    <input className="h-[40px]outline-none  bg-transparent focus:border-gray-400 basis-8/9 focus-visible:outline-none" type="input" 
                    placeholder= "Type new task..." value={value} onChange={handleChange}/>
                </label>
             </form>
        </div>
    )   
}