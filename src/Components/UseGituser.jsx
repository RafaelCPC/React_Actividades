import { useEffect, useState } from "react"
function Hook ({user}) {
const [data, setData] = useState([])
useEffect(() =>{
fetch(`https:/api.github.com/users/${user}`)
  .then (response =>  response.json())
    .then((response) => {
    const data = response
    console.log(data)
        setData(data)
    })
  },[])
    return {
data: data,
    }
}
export function UseGituser ({user}){
const {data} = Hook({user})
return (
  <div>
        <div>Nombre: {data.login}</div>
        <div> id: {data.id}</div>
        <p>Avatar: </p>
        <img src={data.avatar_url}></img>
  </div>
)}