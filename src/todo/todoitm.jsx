import { useState } from "react";

const Itmtodo = ({itm}) =>{

    const [status,setstatus] = useState(false)

    return(
        <div>
            {itm.title}-{status ? "  done  ":"  not-done  "}
            <button onClick={()=>{setstatus(!status)}}>Toggle Todo</button>
        </div>
        
        
    );

}

export default Itmtodo