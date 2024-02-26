import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { SWRConfig } from "swr";

export function BrowserRouter2 (){
    return (
        
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        
    )
}