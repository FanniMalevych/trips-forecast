import './index.css'
import { useContext, useEffect } from 'react'
import { TripsContext } from '../../Context'
import useImage from '../../Common/useImg'
import { getTodayForecast, getTripForecast } from '../../Common/requests'

const Card = ({id, city, startDate, endDate, getInfo, isSelected, getTodayWeather, getDate}) => {
    const { selectTrip } = useContext(TripsContext)
    const handleClick = () => {
        selectTrip(id)
    }
    const {image} = useImage(city.toLowerCase())

    useEffect(() => {
        if(isSelected)  {
            getTodayForecast(city, getTodayWeather)
            getDate(startDate) 
            getTripForecast(city, startDate, endDate, getInfo)
        }
    }, [isSelected])

   
    return (
        <div className="card" onClick={handleClick} style={isSelected ? {border: '2px solid black'} : {}}>
            <div className='img-container'> 
                <img src={image} alt={city}  />
            </div>
            <h3>{city.toUpperCase()}</h3>
            <p className='trip-dates'>{startDate.split('-').reverse().join('.')} - {endDate.split('-').reverse().join('.')}</p>
        </div>
    )
}

export default Card

