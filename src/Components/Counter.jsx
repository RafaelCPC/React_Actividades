import { useEffect, useRef, useState } from "react";
import CounterDisplay from "./CounterDisplay";
export function Counter ({initialValue, incremento, decremento}) {
    const [counter,setCounter] = useState(initialValue);
    const ref= useRef(initialValue)
    useEffect(() => {
        console.log({counter})
    }, [counter])
    function handleIncrement (){
         setCounter(counter + incremento)
    }
    function handleDecrement (){
         setCounter(counter - decremento)
    }
    function handleReset (){
         setCounter(initialValue)
    }
    ref.current = {counter}
 if( ref.current > initialValue) {
    console.log("up")
 } else if (ref.current < initialValue) {
    console.log("down")
 }
    
    return (
        <div>
            <CounterDisplay  counter ={counter}/>
            <button  onClick={handleIncrement}> Incremento </button>
            <button  onClick={handleDecrement}> Decremento </button>
            <button onClick={handleReset}> Reset </button>
        </div>
    )
}
export default Counter;