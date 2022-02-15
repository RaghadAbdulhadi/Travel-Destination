import '../tour/Tour.css';
import React from 'react';

function Tour({tour}) {

    return (
        <>
            <div className="tour" >
                <img className="tourPic"
                    src={tour.image} alt={"Tour"}
                />
                <div className="tourInfo">
                    <h2 style={{fontSize:"25px"}}>{tour.name}</h2>
                </div>
            </div>
        </>
    )

}
export default Tour;