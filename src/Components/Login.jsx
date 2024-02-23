import { useState } from "react";
export function Login ({onLogin}) {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [check, setCheck] = useState(false)
    function handleUser(){
        setUser(event.target.value)
    }
    function handlePass(){
        setPass(event.target.value)
    }
    function handleCheck(){
        setCheck(event.target.checked)
    }
    function handleReset() {
            setUser("")
            setPass("")
            setCheck(false)
    }
    function handleLogin () {
        event.preventDefault()
        console.log(user, pass, check)
    }
    return (
        <form onSubmit={handleLogin}>
            <p>Username</p>
            <input type="text" value={user} onChange={handleUser}></input>
            <p>password</p>
            <input type="password" value={pass} onChange={handlePass}></input>
            <p> Remember </p>
            <input type="checkbox" checked={check} onChange={handleCheck}></input>
            <button onClick={onLogin} disabled={!user || !pass }>Login</button>
            <button onClick={handleReset}> Reset </button>
            <p> username : {user} </p>
            <p> password : {pass} </p>
            <p> checked: {check? "checked": "unchecked"} </p>
        </form>
    )
}
export default Login;