function Tours(props) {
    console.log(props)
    return (
        <>
            {
                props.data.map(tour => {
                    return (
                        <div style={{ borderBottom: "5px solid" }}>
                            <h2 style={{ fontSize:"20px", color:"greenyellow"}}>Tour Name: {tour.name}</h2>
                            <img src={tour.image} alt={"Tour"} />

                        </div>
                    )
                })

            }

        </>
    )

}

export default Tours;