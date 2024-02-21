

import './index.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { YOUR_API_KEY } from '../../Common'
import { TripsContext } from '../../Context'
import useImage from '../../Common/useImg'
import { getTodayForecast, getTripForecast } from '../../Common/requests'

const Card = ({id, city, startDate, endDate, getInfo, isSelected, getTodayWeather, getDate}) => {

    const week = ['Sunday', 'Monday', 'Tuesday']
    const { selectTrip } = useContext(TripsContext)
    const handleClick = () => {
        selectTrip(id)
    }

    const {image} = useImage(city.toLowerCase())

    // useEffect(() => {
    //     isSelected && axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`)
    //     .then(res => {
    //       getInfo(res.data.days)  
    //     }).catch(error => console.log(error))
    // }, [isSelected])

    // useEffect(() => {
    //     isSelected && axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`)
    //     .then(res => {
    //     getTodayWeather(res.data.days[0]) 
    //     getDate(startDate) 
    //     }).catch(error => console.log(error))
    // }, [isSelected])
    useEffect(() => {
        if(isSelected)  {
            getTodayForecast(city, getTodayWeather)
            getDate(startDate) 
            getTripForecast(city, startDate, endDate, getInfo)
        }
    }, [isSelected])

   
    return (
        <div className="card" onClick={handleClick}>
        <div className='img-container'> 
            <img src={image} alt={city}  />
        </div>
       
        <h1>{city.toUpperCase()}</h1>
        <p>{startDate}</p>
        <p>{endDate}</p>
       
      </div>
    )
}

export default Card

