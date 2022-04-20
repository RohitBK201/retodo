import { useState } from "react";

const Intodo =({addtodo}) =>{

    const [text,setText] = useState("");

    return(

    <div>
        <input type="text"
        onChange={(e)=>{
            setText(e.target.value)
        }} />
        
        
        
        <button
        onClick={()=>{

            addtodo(text);

        }}
    >
        add todo</button>
    </div>
        
    );

}

export default Intodo