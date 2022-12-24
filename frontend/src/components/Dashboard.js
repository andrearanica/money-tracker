import Movement from "./Movement"

export default function Dashboard (props) {
    if (!props.token) {
        return null
    }
    return (
        <div className="dashboard my-5">
            {
            props.movements.map(movement => (
            <Movement movement={ movement }/>
            ))
            }
        </div>
    )
}