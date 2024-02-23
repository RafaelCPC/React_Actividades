import { useEffect, useState } from "react";

export function TodoList () {
const [dosa, setDosa] = useState("")
const [todos, setTodos] = useState(["hola", "adios","chao"])

    function handleInput(){
        setDosa(event.target.value)
    }
   function handleTodo (){
    setTodos([...todos,dosa])
} 
function handleReset(){
    setTodos([]);
}
function handleRemove(){
    setTodos(todos.filter((item) => {return todos !== item}))
}
    return (
    <div>
         {todos.map((todos, index)=>{
           return(
            <ul>
              <li name="todos" key={index}>{todos}</li>
              <button value={index} onClick={handleRemove}> Remove </button>
            </ul>
           ) 
         })}
        <input type="text" value={dosa} onChange={handleInput}></input> 
        <button onClick={handleTodo}> Submit </button>
        <button onClick={handleReset}> Reset </button>
    </div>  
    )
}
export default TodoList;