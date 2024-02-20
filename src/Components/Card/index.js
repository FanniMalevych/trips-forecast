import london from '../../Assets/london.jpeg'
import tokyo from '../../Assets/tokyo.jpeg'
import barcelona from '../../Assets/barcelona.jpeg'
import berlin from '../../Assets/berlin.jpeg'
import kyiv from '../../Assets/kyiv.jpeg'
import milan from '../../Assets/milan.jpeg'
import paris from '../../Assets/paris.jpeg'
import stockholm from '../../Assets/stockholm.jpeg'

import './index.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { YOUR_API_KEY } from '../../Common'

const Card = ({id, city, startDate, endDate, getInfo, isSelected, getTodayWeather, getDate}) => {
    const cities = {london, tokyo, barcelona, berlin, kyiv, milan, paris, stockholm}
    const week = ['Sunday', 'Monday', 'Tuesday']

    useEffect(() => {
        isSelected && axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`)
        .then(res => {
          getInfo(res.data.days)  
        }).catch(error => console.log(error))
    }, [isSelected])

    useEffect(() => {
        isSelected && axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`)
        .then(res => {
        getTodayWeather(res.data.days[0]) 
        getDate(startDate) 
        }).catch(error => console.log(error))
    }, [isSelected])
    const date = new Date(startDate)
   
    return (
        <div className="card">
        <div className='img-container'> 
            <img src={cities[city.toLowerCase()]} alt={city}  />
        </div>
       
        <h1>{city.toUpperCase()}</h1>
        <p>{startDate}</p>
        <p>{endDate}</p>
       
      </div>
    )
}

export default Card

