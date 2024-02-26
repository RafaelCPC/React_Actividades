import { useState } from "react"
import CounterDisplay from "./CounterDisplay";
function CounterHook (value = 0) {
const [counter, setCounter] = useState (value)
function handleIncrement (){
    setCounter ((c) => c + 1)
}
function handleDecrement (){
    setCounter ((c) => c - 1)
}
function handleReset (){
    setCounter (value)
}
    return {
counter: counter,
onIncrement: handleIncrement,
onDecrement: handleDecrement,
onReset: handleReset
    }
}
export function UseCounter ({value = 0}) {
const {counter, onIncrement, onDecrement, onReset} =CounterHook(value)
    return(
        <div>
        <CounterDisplay counter={counter} />
        <button onClick={onIncrement}> Increment</button>
        <button onClick={onDecrement} > Decrement</button>
        <button onClick={onReset}  > Reset </button>
        </div>
    )
}