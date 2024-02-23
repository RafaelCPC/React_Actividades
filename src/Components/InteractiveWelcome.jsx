import { useState } from "react";
import Welcome from "./Welcome";

export function InteractiveWelcome () {
    const [user, setUser] = useState("")
    function handleUser(){
        setUser(event.target.value)
    }
    return (
        <form>
        <input type="text" value={user} onChange={handleUser}></input>
        <Welcome name={user} />
        </form>
    )
}
export default InteractiveWelcome;