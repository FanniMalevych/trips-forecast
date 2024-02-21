import { useContext, useEffect, useState } from 'react'
import Card from '../Card'
import './index.css'
import { TripsContext } from '../../Context'
import Timer from '../Countdown'
import { Icon } from '../Icon'
// import Test from '../Icon'

const CardsContainer = () => {

const { trips, selectTrip } = useContext(TripsContext)
const [daysForecast, setDaysForecast] = useState('')
const [todayForecast, setTodayForecast] = useState('')
const [countdownDate, setCountdownDate] = useState('')


    return (
        <>
        <div className='card-container'>
            <ul className="cards">
        {trips.map(trip => {
 return <Card id={trip.id} 
            city={trip.city}  
            startDate={trip.startDate} 
            endDate={trip.endDate} 
            getInfo={setDaysForecast}
            getTodayWeather={setTodayForecast} 
            isSelected={trip.isSelected} 
            getDate={setCountdownDate}/>
            
        })}
            
            </ul>

      </div>
      <div>{daysForecast && daysForecast.map(day => (
      <div className='days-forecast-container'><p>{day.tempmax} - {day.tempmin} condition: {day.conditions}</p> 
      icon
      <Icon name={day.icon}/>
      </div>))}</div>

      <div>TODAY max = {todayForecast.tempmax}, min = {todayForecast.tempmin} </div>
      <Timer date={countdownDate}/>
      </>
    )
}

export default CardsContainer