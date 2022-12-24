function Movement (props) {
    return (
        <div className="card text-white bg-success mb-3 my-2" style={{ maxWidth: "18rem;" }}>
        <div className="card-body">
            <h5 className="card-title">{ props.movement.value }</h5>
            { props.movement.description ? <p className="card-text">{ props.movement.description }</p> : <p>No description</p> }
        </div>
        </div>
    )
}

export default Movement