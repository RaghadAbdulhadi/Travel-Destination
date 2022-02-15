import Tour from '../tours/tour/Tour';
import tourData from "../../data/db.json";

function Tours() {
    const tours = tourData.map(tour => {
        return (
            <Tour 
            key = {tour.id}
            tour = {tour}
            />
        )
    })


    return (
        <>
        <section className="tour-list">
            {tours}
        </section>

        </>
    )
}

export default Tours;