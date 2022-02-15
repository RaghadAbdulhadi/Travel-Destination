import React, {useState} from "react";
import tours from '../../data/db.json';
import { useParams } from 'react-router-dom';
import '../TourDetails/TourDetails.css';

function TourDetails (){
    let { id } = useParams();
    const tourData = () => {
        const dataOfTour = tours.filter((tour)=>tour.id === id);
        //console.log(dataOfTour);
        return dataOfTour;
    }
    const dataOfTour = tourData();
    const [moreInfo, setMoreInfo] = useState(false);

    return(
        <div className="tourDetails">
            <div className="tourData">
                <h1 style={{color: 'pink',fontSize:"50px"}}>{dataOfTour[0].name}</h1>
                <h2 style = {{color:"gray"}}>
                    { moreInfo
                    ?dataOfTour[0].info
                    : `${dataOfTour[0].info.substring(0, 200)}...`}
                    <button onClick={() => setMoreInfo(!moreInfo)}>
                        {moreInfo ? "see less" : "see more"}
                    </button>
                </h2>
                <h3 style={{color:"#236e8b"}}>Price: {dataOfTour[0].price}$</h3>
                <div className="tourImage">
                    <img src={dataOfTour[0].image} alt='tour'/>
                </div>
                
            </div>
        </div>
    );
}

export default TourDetails;