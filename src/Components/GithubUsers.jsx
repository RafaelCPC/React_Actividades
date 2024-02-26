import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers () {
const [gituser, setGituser] = useState("");
const [usuarios, setUsuarios] = useState([])
function handleGit(event) {
    setGituser(event.target.value)
}
function handleSubmit() {
    let array= []
    array = [...usuarios]
    array.push (gituser)
    setUsuarios(array)
}
    return (
        <div>
            <h2> Data Fetching 2</h2>
            <ul>
            {usuarios.map((usuarios) => {
            return(
                <li key={usuarios}><GithubUser user={usuarios} /></li>
            )
        })}
            </ul>
            <input type="text" onChange={handleGit} value ={gituser} />
            <button onClick={handleSubmit}> Submit </button>
        </div>

        
    )
}
