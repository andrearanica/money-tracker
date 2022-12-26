export default function Home (props) {
    return (
        <div className="container my-5 text-center" style={{ color: 'white' }}>
            <h1>🚀 Benvenuto</h1>
            {
                props.movements.map(movement => {
                    return (
                        <h1>{ movement.title }</h1>
                    )
                })
            }
        </div>
    )
}