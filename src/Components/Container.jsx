import { useState } from "react"

export function Container ({title}) {
    const [collapse, setCollapse] = useState(false)
    function handleCollapse (){
        setCollapse (true);
        if (collapse){
            setCollapse(false)
        }
    }
    return (
        <div >
            <h2 onClick={handleCollapse}>{title}</h2>
            {collapse && <div className="Div"> hi! </div>}
        </div>
    )
}