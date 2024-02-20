import { useContext } from 'react'
import Card from '../Card'
import './index.css'
import { TripContext } from '../../Context'


const CardsContainer = () => {

const value = useContext(TripContext)

console.log(value);


    return (
        <div className='card-container'>
      <ul className="cards">
        {value.map(trip => <Card city={trip.city} endDate={trip.endDate} startDate={trip.startDate} />)}
      </ul>
      </div>
    )
}

export default CardsContainer