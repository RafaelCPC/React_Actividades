import { useParams } from "react-router-dom"

export function ShowGithubUser () {
const {username} =useParams()
    return (
        <div>
            <h3>  {username}</h3>
        </div>
    )
}