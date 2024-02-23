import { useEffect, useRef } from "react";

export function FocusableInput(){
   const inputRef = useRef(null)
   const mountedRef = useRef(false)
   
   useEffect(()=> {
    inputRef.current?.focus()
    if (!mountedRef.current){
        mountedRef.current = true,
        console.log("mounted first time")
    } else{
        console.log("mounting again")
    }
}, [])
console.log(inputRef)
    return (
        <div>
        <input ref={inputRef} type="text"></input>
        </div>

    )
}
export default FocusableInput;