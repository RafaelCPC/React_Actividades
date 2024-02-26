import { Link, Outlet, useParams } from "react-router-dom"
import useSWR from "swr"

function useGithubUsers () {
    
    const {data,error, mutate} =useSWR(`https://api.github.com/users`, fetcher2)
function handleRefreshUsers () {
    mutate()
}
    return {
    users: data,
    error,
    isLoading: !data && !error,
    onRefresh: handleRefreshUsers
}
}
const fetcher2 = url => fetch(url)
  .then((response) => response.json())
export function GithubUserList (){
  const {username}=  useParams()
const {users, error, isLoading, onRefresh} = useGithubUsers(username)

    return (
        <div>
        <button onClick={onRefresh}>Refresh </button>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3> An error ocurred </h3>}
        {users && !error && <ul>
            {users.map ((user) =>(
                <li key ={user.id}>
                    <Link to={`/userlist/${user.login}`}> {user.login}  </Link></li>
            ))}
            </ul>}
            <Outlet />
        </div>
    )
}