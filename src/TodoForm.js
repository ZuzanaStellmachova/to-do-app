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
            <form className="flex mb-4 gap-2" onSubmit={handleSubmit}>
                <input className="h-[40px] flex-1 outline-none border rounded-md focus:border-gray-400 px-[16px] " type="search" placeholder="Type your to do" value={value} onChange={handleChange}/>
                <button className="bg-black text-white px-3 rounded-md hover:bg-slate-600" type="submit" >Save</button>
             </form>
        </div>
    )
}