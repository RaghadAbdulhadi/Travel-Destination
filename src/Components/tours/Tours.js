import Tour from '../tours/tour/Tour';
import { Link } from 'react-router-dom';
import React from 'react';

function Tours({ tours }) {
    return (
        <div className="tours">
            {
                tours.map(tour => {
                    return (
                        <div className="tour-info" key={tour.id}>
                            <Link to={`/tour/${tour.name}/${tour.id}`}>
                                <Tour tour={tour} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Tours;

//mapping through all the tours and for each tour im creating a div with a unique key for each one 
//when i hit the route it renders for me the route component
