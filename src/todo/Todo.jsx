import { useState } from "react"
import Intodo from "./inptodo"
import Itmtodo from "./todoitm"

const Todo = () => {


    const [todo, setTodo] = useState([]);

    const addtodo = (data) =>{

        const t = {
           
            id : Date.now(),
            title: data,
        
        }

        setTodo([...todo,t])

    }

    return (
        <div>
            <Intodo addtodo={addtodo} />
            { todo.map((e) =>(
                             
            <Itmtodo itm={e} key={e.id}/>

            )
             )}
        </div>
    )

}

export default Todo