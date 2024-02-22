import { useContext, useEffect, useState } from 'react'
import Card from '../Card'
import './index.css'
import { TripsContext } from '../../Context'
import Timer from '../Countdown'
import { Icon } from '../Icon'
import { getDayName } from '../../Common/getDayName'
import Modal from '../Modal'

const TripsForecast = () => {

const { trips } = useContext(TripsContext)
const [daysForecast, setDaysForecast] = useState('')
const [todayForecast, setTodayForecast] = useState('')
const [countdownDate, setCountdownDate] = useState('')
const [tripsList, setTripsList] = useState(trips)

const [openModal, setOpenModal] = useState(false)

const handleChange = ({target}) => {
    const copy = [...trips]
    if(target.value) {
        const result = tripsList.filter(({city}) => city.includes(target.value))
        return setTripsList(result)
    } else {
        return setTripsList(copy)
    }
}
useEffect(() => {
    setTripsList(trips)
}, [trips])

    return (
        <>
        <div style={openModal ? {filter : 'blur(5px)'} : {}}>
        <p className='title'>Weather <b>forecast</b></p>
        <div className="search-container">
            <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
            <input type="text" placeholder="Search your trip" className="trip-search" onChange={handleChange}/>
        </div>
        <div className='card-container'>
            <ul className="cards">
        {tripsList.map(trip => {return (
            <Card 
                key={trip.id}           
                id={trip.id} 
                city={trip.city}  
                startDate={trip.startDate} 
                endDate={trip.endDate} 
                getInfo={setDaysForecast}
                getTodayWeather={setTodayForecast} 
                isSelected={trip.isSelected} 
                getDate={setCountdownDate}/>)
        })}
            </ul>
            <div className='add-trip'><p>add a new trip</p><button className='add-trip-btn' onClick={() => {setOpenModal(true)}}>+</button></div>
            
            <div className='today-forecast'> 
                <p>{getDayName(todayForecast.datetime)} </p>
                <p>Today's weather</p>
                <p>max = {todayForecast.tempmax}°C, min = {todayForecast.tempmin}°C </p>
                <Icon name={todayForecast.icon}/>
                <div className='timer-container'><p>your upcoming trip in :</p><Timer date={countdownDate}/></div>
            </div>
      
        </div>
        <h3>Your trip's forecast</h3>
        <div className='forecast-container'>{daysForecast && daysForecast.map(day => (
            <div className='day-forecast-container'>
                <p>{getDayName(day.datetime)}</p> 
                <Icon name={day.icon}/>
                <p>{day.tempmax}°C - {day.tempmin}°C </p>
                <p><i>{day.conditions}</i></p> 
            </div>))}
        </div>
        
        </div>
        {openModal && <Modal closeModal={setOpenModal}/>}
      </>
    )
}

export default TripsForecast