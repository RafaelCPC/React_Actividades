import { useState } from "react"

function Hook () {
const [user,setUser] = useState ("")
const [pass, setPass] = useState ("")
function handleUser (event) {
    setUser(event.target.value)
}
function handlePass (event) {
    setPass(event.target.value)
}
return {
    user : user,
    pass : pass,
    handleUser: handleUser,
    handlePass: handlePass,
}
}
export function FormHook () {
const {user, pass, handlePass, handleUser} = Hook()
console.log(user, pass)
    return (
        <form>
            <input type="text" value={user} onChange={handleUser} />
            <input type="password" value={pass} onChange={handlePass} />
        </form>
    )
}