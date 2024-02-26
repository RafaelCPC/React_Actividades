import { useEffect, useState } from "react"
import useSWR from "swr"

{/* function Hook ({user}) {
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
} */}
const fetcher2 = url => fetch(url)
  .then((response) => response.json())

export function UseGituser ({user}){
{/* const {data} = Hook({user}) */}

const {data} = useSWR(`https:/api.github.com/users/${user}`,fetcher2)

return (
  <div>
        {/*<div>Nombre: {data.login}</div>
        <div> id: {data.id}</div>
        <p>Avatar: </p>
        <img src={data.avatar_url}></img> */}
         <h2>SRW 3</h2>
        {data && <div> Nombre: {data.login}</div>}
        {data && <div> id: {data.id}</div> }
        <p>Avatar: </p>
        {data && <img src={data.avatar_url}></img>}

  </div>
)}