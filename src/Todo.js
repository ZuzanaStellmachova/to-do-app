import React, { useState } from "react";

export default function Todo({addTodo}) {
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
                <button type="submit" >Save</button>
             </form>
        </div>
    )
}