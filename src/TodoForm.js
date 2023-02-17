import React, { useState } from "react";

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState("");

    function handleSubmit(event) {
        event.preventDefault();  
        addTodo(value);
        setValue("");  
    }


    function handleChange(event) {

        setValue(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Type your to do" value={value} onChange={handleChange}/>
                <button className="bg-black text-white px-3 rounded-md hover:bg-slate-600" type="submit" >Save</button>
             </form>
        </div>
    )
}