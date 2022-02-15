import '../tour/Tour.css';
import React from 'react'
//import ReactDOM from 'react-dom'
function Tour(props) {

    const [details, addTourDetails] = React.useState()


    function addDetails() {

        addTourDetails(
            <h3>Price: {props.tour.price}
            <br></br>
            <br></br>
            Information: {props.tour.info}
            </h3>
        )
    }

    function handleOnMouseHover() {
        console.log("bye roro")
    }

    return (
        <>
            <div className="tour" onClick={addDetails}>
                <img className="tourPic"
                    src={props.tour.image} alt={"Tour"}
                    onMouseOver={handleOnMouseHover}
                />
                <div className="tourInfo">
                    <h2 style={{fontSize:"25px"}}>{props.tour.name}</h2>
                </div>
                <h3>{details}</h3>
            </div>
        </>
    )

}
export default Tour;