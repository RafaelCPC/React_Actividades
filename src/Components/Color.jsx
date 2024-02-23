export function Color ({color}) {
    return (
        color.map((color) => {
            return (<li key={color.id}> {color.name} </li>)
        })
    )
}
export default Color;