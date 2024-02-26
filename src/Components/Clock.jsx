import { useContext, useEffect, useState } from "react";
import {LanguageContext} from "./LanguageContext"
export function Clock(){
    const language = useContext(LanguageContext)
    const [date, setDate] = useState(new Date())
    useEffect (() => {
        setInterval(() => {
            setDate(new Date ())
        },1000)
    },[])
    return (
        <div>
        <h2>{language === "en" ? "The time is" : "la hora es"}</h2>
        <h2>{date.toLocaleTimeString()}</h2>
        </div>

    )
}
export default Clock;