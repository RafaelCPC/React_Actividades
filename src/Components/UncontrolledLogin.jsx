import { useState } from "react"

export function UncontrolledLogin (){
    function handleSubmit () {
        event.preventDefault()
        const user = event.target.elements.namedItem("username").value
        const pass = event.target.elements.namedItem("password").value
        const remember = event.target.elements.namedItem("remember").checked
        const data = {user, pass, remember}
    console.log(data);

    }
    return (
        <form onSubmit={handleSubmit}>
            <p>Username</p>
            <input name="username" ></input>
            <p>Password</p>
            <input name="password" type="password" ></input>
            <p>Remember</p>
            <input name="remember" type="checkbox"></input>
            <hr/>
            <button> Login </button>
            <button type="reset"> Reset </button>
        </form>

    )
}
export default UncontrolledLogin;