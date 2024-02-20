import { useContext } from 'react'
import Card from '../Card'
import './index.css'
import { TripsContext } from '../../Context'


const CardsContainer = () => {

const { trips } = useContext(TripsContext)

    return (
        <div className='card-container'>
            <ul className="cards">
        {trips.map(trip => <Card  city={trip.city}  startDate={trip.startDate} endDate={trip.endDate} />)}
       
            </ul>
      </div>
    )
}

export default CardsContainer