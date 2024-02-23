export function MouseClicker () {
    function handleClicker (){
        console.log(event.target.name)
    }
    function handleImg (){
        console.log(event.target.src)
    }
    return (
        <button name ="one" onClick={handleClicker}>
            <img src="src/assets/phishing-warning-bunny.webp" onClick={handleImg}></img>
             Clicker 
        </button>
    )
}
export default MouseClicker;