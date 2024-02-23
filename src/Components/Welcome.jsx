import Age from "./Age";
import AlertClock from "./AlertClock";
function AdultAge ({aged}){
    if (aged > 18 && aged < 65){
        return ( <p>You are middle age </p>)
    } else{
        return (<p>You are not inside the branch</p>)
    }
}
    function JohnAge ({ageJohn, name}){
        if (ageJohn > 18 && ageJohn < 65 && name === "John"){
            return ( <p>You are John, and your age is between 18 and 65 </p>)
        } else{
            return (<p>You are not Jhon or you don't have the required age</p>)
        }
}
export function Welcome ({name,age}) {
    return (
    <div className="welcome">
        <p> Welcome, {name}! </p>
        <p> Your age is {age} </p>
        <h2> Props 3</h2>
        <Age ages= "30" />
        <h2> Conditional Rendering 1</h2>
        {age > 18 && <p>You are an adult! </p>}
        {!!age  && <p> You added your age </p>}
        <AdultAge aged="30" />
        <JohnAge name="John" ageJohn="30" />
        <h2> Conditional Rendering 2</h2>
        {age >18 ? `Your age is ${age}`:"You are very young!"}
    </div>
    )
}
export default Welcome;